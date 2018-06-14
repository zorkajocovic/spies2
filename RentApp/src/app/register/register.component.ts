import { Component, OnInit } from '@angular/core';
import { AppUser } from '../models/AppUser.model';
import { NgForm } from '@angular/forms';
import { DemoServiceService } from '../demoService/demo-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {

  roles: any = ["Client", "Manager"];
  selectedRole: string;

  constructor(private service: DemoServiceService, private router: Router) {
  
   }

  ngOnInit() {
  }

  onSubmit(user: AppUser, form: NgForm) {
    debugger
<<<<<<< HEAD
    user.role = this.selectedRole;
    this.service.postMethodDemo("http://localhost:51111/api/Account/Register", user).subscribe(
=======
    if(this.selectedRole == "Manager"){
      user.role = "Manager";
    }
    else{
      user.role = "AppUser";
    }

<<<<<<< HEAD
    this.service.postMethodDemo("http://localhost:51111/api/Account/Register", user).subscribe(
=======
    this.service.postMethodDemo(user).subscribe(
>>>>>>> d43f664a36377557917f47afc58907512c97df41
>>>>>>> 042cca0bd7f377d368598c1a6f64194b7b4ceab4
      data => {
        alert("Uspesno ste se registrovali")
        this.router.navigate(['services']);
      },
      error => {
        alert("nije uspelo")
      })

    form.reset();
  }

}