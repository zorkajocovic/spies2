import { Component, OnInit } from '@angular/core';
import { BranchOffice } from '../models/branchoffice';
import { NgForm } from '@angular/forms';
import { DemoServiceService } from '../demoService/demo-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-branch-office',
  templateUrl: './branch-office.component.html',
  styleUrls: ['./branch-office.component.css']
})

export class BranchOfficeComponent implements OnInit {

  serviceId: number;

  constructor(private service: DemoServiceService, private activatedRoute: ActivatedRoute) { 
    debugger
    this.activatedRoute.params.subscribe(params => {this.serviceId = params["Id"]});    //Id je definisano u appmodule.ts kod path: "service/Id"
    this.allBranches('http://localhost:51111/api/GetBranchOfficesForService/' + this.serviceId );
  }

  url: string = '';
  selectedFile: string;
  branches: BranchOffice[];

  ngOnInit() {
  }

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

  onSubmit(newBranch: BranchOffice, form: NgForm){

    this.service.getMethodDemo("http://localhost:51111/api/BranchOffice").subscribe(
      data => {
         this.branches = data;
      });

      debugger
      let body = new FormData();
      body.append('image', this.selectedFile)
      body.append('branch', JSON.stringify(newBranch))

    this.url = "";  
    form.reset();
  }

  
  allBranches(path: string){
    this.service.getMethodDemo(path).subscribe(
      data => {
        this.branches = data;
       // alert("uspelo")
      },
      error => {
        alert("nije uspelo")
      })
    }
}
