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
    this.allServices('http://localhost:51685/api/Services');
=======
    this.allServices('http://localhost:51111/api/Services');
>>>>>>> 6cf6b1a7289e3767212638ac7d05e216af88a723
  }

  allServices(path: string){
    this.service.getMethodDemo(path).subscribe(
      data => {
        this.services=data;
      },
      error => {
        alert("nije uspelo")
      })
    }
    
  }
