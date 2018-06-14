import { Component, OnInit } from '@angular/core';
import { DemoServiceService } from '../demoService/demo-service.service';
import { Branchoffice } from '../models/branchoffice';
import { NgForm } from '@angular/forms';
import { Reservation } from '../models/reservation'

@Component({
  selector: 'app-vehicles-reserve',
  templateUrl: './vehicles-reserve.component.html',
  styleUrls: ['./vehicles-reserve.component.css']
})
export class VehiclesReserveComponent implements OnInit {

  BranchOffices: Branchoffice[];
  Branchoffice: number;
  Branchoffice1: number;
  UserId: number;

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
        this.Branchoffice = data[0].BranchOfficeID;
        this.Branchoffice1 = data[0].BranchOfficeID;


      },
      error => {
        alert("nije uspelo")
      })
  }



  ReservationData(dataForm: Reservation, form: NgForm) {
    debugger
 

    this.service.getMethodDemo("http://localhost:51111/api/GetActiveUserId").subscribe(
      data => {
        this.UserId = data;

        dataForm.GetBranchId = this.Branchoffice;
        dataForm.ClientID = this.UserId;
        dataForm.ReturnBranchID = this.Branchoffice1;

        this.service.postMethodDemo("http://localhost:51111/api/Reservation", dataForm).subscribe(
          data => {
            this.BranchOffices = data;
          },
          error => {
            alert("nije uspelo")
          })
        form.reset();
      },
      error => {
        alert("nije uspelo")
      })



  
  }


}
}
