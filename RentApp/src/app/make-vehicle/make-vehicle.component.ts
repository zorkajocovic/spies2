import { Component, OnInit } from '@angular/core';
import { VehicleType } from '../vehicle-type';
import { DemoServiceService } from '../demoService/demo-service.service';

@Component({
  selector: 'app-make-vehicle',
  templateUrl: './make-vehicle.component.html',
  styleUrls: ['./make-vehicle.component.css']
})

export class MakeVehicleComponent implements OnInit {

  types: VehicleType[];

  constructor(private service: DemoServiceService) { 
    this.service.getMethodDemo("http://localhost:51111/api/VehicleType").subscribe(
      data => {
        this.types = data;
      })
  }


  ngOnInit() {
  }


}
