import { Component, OnInit } from '@angular/core';
import { AppUser } from '../models/AppUser.model';
import { NgForm } from '@angular/forms';
import { DemoServiceService } from '../demoService/demo-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {

  users: AppUser[];
  service: DemoServiceService;

  constructor() {
    this.users = [];
   }

  ngOnInit() {
  }

  onSubmit(user: AppUser, form: NgForm) {
    console.log(user);
    this.users.push(user);

    this.service.postMethodDemo(user);

    form.reset();
  }

}