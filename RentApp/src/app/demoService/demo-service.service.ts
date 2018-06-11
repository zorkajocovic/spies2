import { Injectable } from '@angular/core';

import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';    //nije moglo da se ukljuci iz 'rxjs/Observable'
import { AppUser } from '../models/AppUser.model'
//import 'rxjs/add/operator/catch';
//import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class DemoServiceService {

  constructor(private httpClient: HttpClient) { }

   getMethodDemo(): Observable<any> {
    return this.httpClient.get('http://localhost:51683')
  }

  postMethodDemo(newMember): Observable<any> {
    return this.httpClient.post("http://localhost:51683/api/Account/Register", newMember)
  }
}
