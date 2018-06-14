import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { DemoServiceService} from '../demoService/demo-service.service';
import { Service } from '../models/service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})

export class ServicesComponent implements OnInit {

  services: Service[];
  serviceId: number = -1;

  constructor(private service: DemoServiceService) {  
    this.services = [];  
   }

  ngOnInit() {
<<<<<<< HEAD
=======

>>>>>>> b1600ef3987fbc3ac6f79b29296108af09ff586b
    this.allServices('http://localhost:51111/api/Services');
  }

  allServices(path: string){
    this.service.getMethodDemo(path).subscribe(
      data => {
        this.services = data;
      },
      error => {
        alert("nije uspelo")
      })
    }
    
  }
