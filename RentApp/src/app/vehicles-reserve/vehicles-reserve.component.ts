import { Component, OnInit } from '@angular/core';
import { DemoServiceService } from '../demoService/demo-service.service';
import { Branchoffice } from '../models/branchoffice';

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
    this.allBranchOffices('http://localhost:51685/api/BranchOffice');
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
}
