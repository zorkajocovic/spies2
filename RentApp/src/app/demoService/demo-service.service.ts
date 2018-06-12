import { Injectable } from '@angular/core';

import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';    //nije moglo da se ukljuci iz 'rxjs/Observable'
import { AppUser } from '../models/AppUser.model'
import { LoginModel } from '../models/login-model';
//import 'rxjs/add/operator/catch';
//import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})

export class DemoServiceService {

  constructor(private httpClient: HttpClient) { }

   getMethodDemo(path): Observable<any> {
    return this.httpClient.get(path);
  }

  postMethodDemo(newMember): Observable<any> {
    return this.httpClient.post("http://localhost:51683/api/Account/Register", newMember)
  }

  getTheToken(user: LoginModel){

    let headers = new HttpHeaders();
    headers = headers.append('Content-type', 'application/x-www-form-urlencoded');
    
    if(!localStorage.jwt)
    {
       let x = this.httpClient.post('http://localhost:51683/oauth/token',`username=${user.username}&password=${user.password}&grant_type=password`, {"headers": headers}) as Observable<any>

      x.subscribe(
        res => {
          console.log(res.access_token);
          
          let jwt = res.access_token;

          let jwtData = jwt.split('.')[1]
          let decodedJwtJsonData = window.atob(jwtData)
          let decodedJwtData = JSON.parse(decodedJwtJsonData)

          let role = decodedJwtData.role

          console.log('jwtData: ' + jwtData)
          console.log('decodedJwtJsonData: ' + decodedJwtJsonData)
          console.log('decodedJwtData: ' + decodedJwtData)
          console.log('Role ' + role)
         
          localStorage.setItem('jwt', jwt)
          localStorage.setItem('role', role);

          alert("Uspjesno ste se ulogovali!");
        
        },
        err => {
          console.log("Error occured");
        }
      );
    }
    else
    {
       let x = this.httpClient.get('http://localhost:51683/api/AppUsers') as Observable<any>

      x.subscribe(
        res => {
          console.log(res);
        },
        err => {
          console.log("Error occured");
        }
      );
    }
    
  }
}
