import { Component, OnInit } from '@angular/core';
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

  constructor(private service: DemoServiceService) { 
    this.allVehicles('http://localhost:51683/api/Vehicle');
  }

  ngOnInit() {
  }


  allVehicles(path: string){
    this.service.getMethodDemo(path).subscribe(
      data => {
        this.vehicles=data;
        alert("uspelo")
      },
      error => {
        alert("nije uspelo")
      })
    }

}
