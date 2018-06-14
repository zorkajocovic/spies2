import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { DemoServiceService } from '../demoService/demo-service.service';
import { Service } from '../models/service';

@Component({
  selector: 'app-make-service',
  templateUrl: './make-service.component.html',
  styleUrls: ['./make-service.component.css']
})

export class MakeServiceComponent implements OnInit {

  constructor(private service: DemoServiceService) { }

  ngOnInit() {
  }

  selectedFile: File;
  onSelectFile(event) {
    if (event.target.files && event.target.files[0]) {
      // var reader = new FileReader();

      // reader.readAsDataURL(event.target.files[0]); // read file as data url

      // reader.onload = (event) => { // called once readAsDataURL is completed
      //   this.url = event.target.result;
      // }

      this.selectedFile = event.target.files[0]
    }
  }

  onSubmit(newService: Service, form: NgForm){
    debugger
    let body = new FormData();
    body.append('image', this.selectedFile)
    body.append('service', JSON.stringify(newService))


    this.service.getMethodDemo("http://localhost:51111/api/GetActiveUserId").subscribe(
      data => {
          newService.Creator = data;
          this.service.postMethodDemo("http://localhost:51111/api/Services", body).subscribe(
            data => {
              alert("Uspesno ste se dodali novi servis")
              //this.router.navigate(['services']);
            },
            error => {
              alert("nije uspelo")
            })
      });



    form.reset();
  }

}
