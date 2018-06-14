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

  roles: any = ["Client", "Manager"];
  selectedRole: string;

  constructor(private service: DemoServiceService) {
  
   }

  ngOnInit() {
  }

  onSubmit(user: AppUser, form: NgForm) {
    debugger
    user.role = this.selectedRole;
    this.service.postMethodDemo("http://localhost:51111/api/Account/Register", user).subscribe(
      data => {
        alert("Uspesno ste se registrovali")
      },
      error => {
        alert("nije uspelo")
      })

    form.reset();
  }

  radioChangeHandler($event){
    this.selectedRole = $event;
  }
}