import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { DemoServiceService } from '../demoService/demo-service.service';
import { ActiveUser } from '../models/ActiveUser.model';
=======
>>>>>>> 36b94d7c0d276a71259d6d029e47cbd1ccf4685c

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
<<<<<<< HEAD

export class ProfileComponent implements OnInit {

  user: ActiveUser;

  constructor(private service: DemoServiceService) {
    debugger
    this.service.getMethodDemo("http://localhost:51111/api/GetActiveUser").subscribe(
      data => {
        this.user = data;
      });
   }

  ngOnInit() {
  }
 
=======
export class ProfileComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

>>>>>>> 36b94d7c0d276a71259d6d029e47cbd1ccf4685c
}
