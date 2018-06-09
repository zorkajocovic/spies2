import { Component, OnInit } from '@angular/core';
import { AppUser } from '../models/AppUser.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {

  users: AppUser[];
  constructor() {
    this.users = [];
   }

  ngOnInit() {
  }

  onSubmit(user: AppUser, form: NgForm) {
    console.log(user);
    this.users.push(user);

    form.reset();
  }

}