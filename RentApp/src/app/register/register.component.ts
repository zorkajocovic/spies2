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

  

  constructor(private service: DemoServiceService) {
   }

  ngOnInit() {
  }

  onSubmit(user: AppUser, form: NgForm) {
    console.log(user);

    this.service.postMethodDemo(user).subscribe(
      data => {
        alert("Uspesno ste se registrovali")
      },
      error => {
        alert("nije uspelo")
      })

    form.reset();
  }

}