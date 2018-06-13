import { Injectable } from '@angular/core';

import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

import { Observable, BehaviorSubject } from 'rxjs';    //nije moglo da se ukljuci iz 'rxjs/Observable'
import { AppUser } from '../models/AppUser.model'
//import 'rxjs/add/operator/catch';
//import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})

export class DemoServiceService {

  private messageSource = new BehaviorSubject<boolean>(false);
  currentLoginState = this.messageSource.asObservable();

  private serviceId = new BehaviorSubject<number>(1);
  currentServiceId = this.serviceId.asObservable();

  constructor(private httpClient: HttpClient, private router: Router) { }

  changeLoginState(state: boolean){
    this.messageSource.next(state);
  }
  
  choosenService(id: number){
    this.messageSource
  }

   getMethodDemo(path): Observable<any> {
    return this.httpClient.get(path);
  }
  

  postMethodDemo(newMember): Observable<any> {
<<<<<<< HEAD
    return this.httpClient.post("http://localhost:51685/api/Account/Register", newMember)
=======
    return this.httpClient.post("http://localhost:51111/api/Account/Register", newMember)
>>>>>>> 6cf6b1a7289e3767212638ac7d05e216af88a723
  }

  getTheToken(user){

    let headers = new HttpHeaders();
    headers = headers.append('Content-type', 'application/x-www-form-urlencoded');
    
    if(!localStorage.jwt)
    {
<<<<<<< HEAD
       let x = this.httpClient.post('http://localhost:51685/oauth/token',`username=${user.username}&password=${user.password}&grant_type=password`, {"headers": headers}) as Observable<any>
=======
       let x = this.httpClient.post('http://localhost:51111/oauth/token',`username=${user.username}&password=${user.password}&grant_type=password`, {"headers": headers}) as Observable<any>
>>>>>>> 6cf6b1a7289e3767212638ac7d05e216af88a723

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

          this.changeLoginState(true);
          this.router.navigate(['services']);
        },
        err => {
          alert("Pogresna sifra ili username!");

        }
      );
    }
  }
}
