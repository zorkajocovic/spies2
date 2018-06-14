import { Component, OnInit } from '@angular/core';
import { DemoServiceService } from '../demoService/demo-service.service';
import { Branchoffice } from '../models/branchoffice';
import { NgForm } from '@angular/forms';
import { Reservation} from '../models/reservation'

@Component({
  selector: 'app-vehicles-reserve',
  templateUrl: './vehicles-reserve.component.html',
  styleUrls: ['./vehicles-reserve.component.css']
})
export class VehiclesReserveComponent implements OnInit {

  Branchiffices: Branchoffice[];
  Branchoffice : number;

  constructor(private service: DemoServiceService) { 
    this.Branchiffices = [];
    
  }


  ngOnInit() {
    this.allBranchOffices('http://localhost:51111/api/BranchOffice');
    
    
  }

  allBranchOffices(path: string){
    this.service.getMethodDemo(path).subscribe(
      data => {
        this.Branchiffices=data;      
      },
      error => {
        alert("nije uspelo")
      })
    }

  ReservationData(data: Reservation, form: NgForm){
    debugger
    //data.GetBranchId = this.Branchoffice;
    this.service.postMethodDemo("http://localhost:51111/api/Reservation",data).subscribe(
      data => {
        this.Branchiffices=data;      
      },
      error => {
        alert("nije uspelo")
      })
      form.reset();
  }
}
