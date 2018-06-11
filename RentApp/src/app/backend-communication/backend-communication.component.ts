import { Component, OnInit } from '@angular/core';
import { DemoServiceService } from '../demoService/demo-service.service';
import { AppUser } from '../models/AppUser.model';

@Component({
  selector: 'app-backend-communication',
  templateUrl: './backend-communication.component.html',
  styleUrls: ['./backend-communication.component.css'],
  providers: [DemoServiceService]
})
export class BackendCommunicationComponent implements OnInit {

  private appUser: AppUser;

  constructor(private service: DemoServiceService) { }

  ngOnInit() {
  }

 
  callGet(){
    this.service.getMethodDemo()
      .subscribe(
        data => {
          this.appUser = data;
          alert("POST: name: " + this.appUser.fullName +
          ", born: " + this.appUser.dateOfBirth + ", email: " + this.appUser.email + 
         "password" + this.appUser.password);
        },
        error => {
          console.log(error);
        })
  }

  callPost(newMember: AppUser){
   
    this.service.postMethodDemo(newMember)
    .subscribe(
      data => {
        this.appUser = data;
        alert("POST: name: " + this.appUser.fullName +
         ", born: " + this.appUser.dateOfBirth + ", email: " + this.appUser.email + 
        "password" + this.appUser.password);
      },
      error => {
        console.log(error);
      })
  }
}


