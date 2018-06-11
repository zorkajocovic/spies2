import { Injectable } from '@angular/core';

import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';    //nije moglo da se ukljuci iz 'rxjs/Observable'
import { AppUser } from '../models/AppUser.model'
//import 'rxjs/add/operator/catch';
//import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class DemoServiceService {

  constructor(private httpClient: HttpClient) { }

  private parseData(res: Response) {
    return res.json() || [];
  }

  private handleError(error: Response | any) {
    let errorMessage: string;
    errorMessage = error.message ? error.message : error.toString();
    return Observable.throw(errorMessage);
  }

   getMethodDemo(): Observable<any> {
    return this.httpClient.get('https://localhost:51683')
  }

  postMethodDemo(newMember): Observable<any> {
    return this.httpClient.post("https://localhost:51683/api/AppUsers", newMember)
  }
}
