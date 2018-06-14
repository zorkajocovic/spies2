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
<<<<<<< HEAD
  showSpecificReservation = -1;

=======
>>>>>>> b1600ef3987fbc3ac6f79b29296108af09ff586b
  serviceId: number = -1;

  constructor(private service: DemoServiceService, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(params => {this.serviceId = params["Id"]});    //Id je definisano u appmodule.ts kod path: "service/Id"
    this.allVehicles('http://localhost:51111/api/GetVehiclesForService/' + this.serviceId);
<<<<<<< HEAD

=======
>>>>>>> b1600ef3987fbc3ac6f79b29296108af09ff586b
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

<<<<<<< HEAD

=======
>>>>>>> b1600ef3987fbc3ac6f79b29296108af09ff586b
}
