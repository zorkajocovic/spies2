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


    log = '';

  logDropdown(id: number): void {
    const NAME = this.Branchiffices.find((item: any) => item.id === +id).Address;
    this.log += `Value ${NAME} was selected\n`;

  
}
