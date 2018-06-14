import { Component, OnInit } from '@angular/core';
import { DemoServiceService } from '../demoService/demo-service.service';

@Component({
  selector: 'app-make-service',
  templateUrl: './make-service.component.html',
  styleUrls: ['./make-service.component.css']
})

export class MakeServiceComponent implements OnInit {

  constructor(private service: DemoServiceService) { }

  ngOnInit() {
  }



}
