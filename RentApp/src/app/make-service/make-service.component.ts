import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { DemoServiceService } from '../demoService/demo-service.service';
import { Service } from '../models/service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-make-service',
  templateUrl: './make-service.component.html',
  styleUrls: ['./make-service.component.css']
})

export class MakeServiceComponent implements OnInit {

  constructor(private service: DemoServiceService, private router: Router) { }

  ngOnInit() {
  }

  selectedFile: File;
  url: string;
  creator: string;

  onSelectFile(event) {
    if (event.target.files && event.target.files[0]) {
       var reader = new FileReader();

       reader.readAsDataURL(event.target.files[0]); // read file as data url

       reader.onload = (event) => { // called once readAsDataURL is completed
         this.url = event.target.result;
       }

      this.selectedFile = event.target.files[0]
    }
  }

  onSubmit(newService: Service, form: NgForm){

    this.service.getMethodDemo("http://localhost:51111/api/GetActiveUserId").subscribe(
      data => {
          this.creator = data;
          this.service.postMethodDemo("http://localhost:51111/api/Services", body).subscribe(
            data => {
              alert("Uspesno ste se dodali novi servis")
            },
            error => {
              alert("nije uspelo")
            })
      });

      debugger
      newService.CreatorID = this.creator;
      let body = new FormData();
      body.append('image', this.selectedFile)
      body.append('service', JSON.stringify(newService))

    this.url = "";  
    form.reset();
    this.router.navigate(['services']);
  }

}
