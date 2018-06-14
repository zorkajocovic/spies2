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

  constructor(private httpClient: HttpClient, private router: Router) { }

  changeLoginState(state: boolean){
    this.messageSource.next(state);
  }
  
   getMethodDemo(path): Observable<any> {
    return this.httpClient.get(path);
  }
  
  postMethodDemo(newMember, path): Observable<any> {
    return this.httpClient.post(path, newMember)
  }
<<<<<<< HEAD
=======
=======

  postMethodDemo(path, newMember): Observable<any> {
    return this.httpClient.post(path, newMember)
  }  
>>>>>>> d43f664a36377557917f47afc58907512c97df41
>>>>>>> 8071a7fc95bb1cb6dbdb304f5fd08c11c6f44eb6

  getMethodCurrentUser(): Observable<any> {
    return this.httpClient.get("http://localhost:51111/api/GetActiveUserId");
  }

  getTheToken(user){

    let headers = new HttpHeaders();
    headers = headers.append('Content-type', 'application/x-www-form-urlencoded');
    
    if(!localStorage.jwt)
    {
       let x = this.httpClient.post('http://localhost:51111/oauth/token',`username=${user.username}&password=${user.password}&grant_type=password`, {"headers": headers}) as Observable<any>

    x.subscribe(
        res => {
          console.log(res.access_token);
          
          let jwt = res.access_token;

          let jwtData = jwt.split('.')[1]
          let decodedJwtJsonData = window.atob(jwtData)
          let decodedJwtData = JSON.parse(decodedJwtJsonData)

          let role = decodedJwtData.role

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
