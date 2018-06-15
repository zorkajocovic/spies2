import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

import { Vehicle } from '../models/vehicle';
import { DemoServiceService } from '../demoService/demo-service.service';
import { VehiclesReserveComponent } from '../vehicles-reserve/vehicles-reserve.component'

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.css']
})

export class VehiclesComponent implements OnInit {

  vehicles: Vehicle[];
  showSpecificReservation = -1;

  serviceId: number = -1;

  

  constructor(private service: DemoServiceService, private activatedRoute: ActivatedRoute) {

    this.activatedRoute.params.subscribe(params => {this.serviceId = params["Id"]});    //Id je definisano u appmodule.ts kod path: "service/Id"
    this.allVehicles('http://localhost:51111/api/GetVehiclesForService/' + this.serviceId);
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
}
