import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

import { Vehicle } from '../models/vehicle';
import { DemoServiceService } from '../demoService/demo-service.service';
import { VehiclesReserveComponent } from '../vehicles-reserve/vehicles-reserve.component'
import { Rate } from '../models/rate';
import { NgForm } from '@angular/forms';
import { Comment } from '../models/comment';
import { AppUser } from '../models/AppUser.model';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.css']
})

export class VehiclesComponent implements OnInit {

  vehicles: Vehicle[];
  comments: Comment[];
  showSpecificReservation = -1;
  serviceId: number = -1;
  star5: string;;
  star4: string;
  star3: string;
  star2: string;
  star1: string;
  rate: Rate;
  UserID : number;
  users: AppUser[];
  userNames: string[];

  constructor(private service: DemoServiceService, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(params => {this.serviceId = params["Id"]});    //Id je definisano u appmodule.ts kod path: "service/Id"
    this.allVehicles('http://localhost:51111/api/GetVehiclesForService/' + this.serviceId);
    this.allComments('http://localhost:51111/api/Comment');
  }

  ngOnInit() {
  }

  allVehicles(path: string){
    this.service.getMethodDemo(path).subscribe(
      data => {
        this.vehicles = data;
       // alert("uspelo")
      },
      error => {
        alert("nije uspelo")
      })
    }

    SendRate(){   
      debugger
      this.service.getMethodDemo("http://localhost:51111/api/GetActiveUserId").subscribe(
      data => { 
      this.rate.ClientID = data
      debugger     
      this.rate.SerId = this.serviceId      
        if(this.star5 == "5"){
          this.rate.Value=5;
        }else if(this.star4 == "4"){
          this.rate.Value=4;
        }else if(this.star3 == "3"){
          this.rate.Value=3;
        }else if(this.star2 == "2"){
          this.rate.Value=2;
        }else{
          this.rate.Value=1;
        }      

      this.service.postMethodDemo('http://localhost:51111/api/Rate', this.rate).subscribe(
        data => {
        },
        error => {
          alert("nije uspelo")       
        });
      })
    }

    allComments(path: string){
      debugger
      this.service.getMethodDemo(path).subscribe(
        data => {
          debugger
          this.comments = data;
      for(var i=0; i<this.comments.length; i++){
      this.service.getMethodDemo('http://localhost:51111/api/AppUser/' + this.comments[i].ClientID).subscribe(
        data => {
          this.users = data;         
        },
        error => {
          alert("nije uspelo")
        })
      }

      for(var i=0; i<this.users.length; i++){
        this.userNames.push(this.users[i].fullName);
      }
      })
    }

     
AddComment(comment: Comment, form: NgForm){
  this.service.getMethodDemo("http://localhost:51111/api/GetActiveUserId").subscribe(
      data => {
        debugger
          this.UserID = data;

          comment.ClientID = this.UserID;
          comment.ServiceID = this.serviceId;

          this.service.postMethodDemo("http://localhost:51111/api/Comment", comment).subscribe(
      data => {

      },
      error => {
        alert("nije uspelo")       
        });
      })

      form.reset();
      
    }
  }
