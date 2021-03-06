import { Component, OnInit, Input } from '@angular/core';
import { DemoServiceService } from '../demoService/demo-service.service';
import { BranchOffice } from '../models/branchoffice';
import { NgForm } from '@angular/forms';
import { Reservation } from '../models/reservation'
import { Vehicle } from '../models/vehicle';

@Component({
  selector: 'app-vehicles-reserve',
  templateUrl: './vehicles-reserve.component.html',
  styleUrls: ['./vehicles-reserve.component.css']
})
export class VehiclesReserveComponent implements OnInit {

  BranchOffices: BranchOffice[];
  Branchoffice: number;
  Branchoffice1: number;
  UserId: number;
  GetDate: string;



  @Input() vehicleId: number;

  constructor(private service: DemoServiceService) {
    this.BranchOffices = [];
  }


  ngOnInit() {
    this.allBranchOffices('http://localhost:51111/api/BranchOffice');

  }

  allBranchOffices(path: string) {
    this.service.getMethodDemo(path).subscribe(
      data => {
        this.BranchOffices = data;
<<<<<<< HEAD
        this.Branchoffice = data[0].BranchOfficeID;
        this.Branchoffice1 = data[0].BranchOfficeID;
=======
>>>>>>> 36b94d7c0d276a71259d6d029e47cbd1ccf4685c
      },
      error => {
        alert("nije uspelo")
      })
  }



  ReservationData(dataForm: Reservation, form: NgForm) {

    this.service.getMethodDemo("http://localhost:51111/api/GetActiveUserId").subscribe(
<<<<<<< HEAD
      data => {
        
        this.UserId = data;
        debugger
=======
    data => {
        this.UserId = data;
>>>>>>> 36b94d7c0d276a71259d6d029e47cbd1ccf4685c
        dataForm.ClientID = this.UserId;
        dataForm.VehicleID = this.vehicleId; 
        dataForm.GetBranchId = this.Branchoffice;       
        dataForm.ReturnBranchId = this.Branchoffice1;
        
        this.service.postMethodDemo("http://localhost:51111/api/Reservation", dataForm).subscribe(
          data => {
<<<<<<< HEAD
            debugger
=======
>>>>>>> 36b94d7c0d276a71259d6d029e47cbd1ccf4685c
            this.BranchOffices = data;
          },
          error => {
            alert("nije uspelo")
          })
        })
      }
    }