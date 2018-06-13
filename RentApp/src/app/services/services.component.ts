import { Component, OnInit } from '@angular/core';
import { DemoServiceService} from '../demoService/demo-service.service';
import { Service } from '../models/service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  services: Service[];

  constructor(private service: DemoServiceService) {  
    this.services = [];  
   }


  ngOnInit() {
    this.allServices('http://localhost:51683/api/Services');
  }

  allServices(path: string){
    //path = 'http://localhost:51683/api/Services';
    this.service.getMethodDemo(path).subscribe(
      data => {
        this.services=data;
      },
      error => {
        alert("nije uspelo")
      })
    }
    
  }
