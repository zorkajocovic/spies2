import { Component, OnInit } from '@angular/core';
import { IsSomeLogged } from '../guard/auth.logged';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {

  loggedIn = false;
  

  constructor(private logged: IsSomeLogged) {
    this.loggedIn = this.logged.canActivate();

   }

  ngOnInit() {

  }

  
logOut(){
  debugger
  localStorage.removeItem('jwt')
  localStorage.removeItem('role');
  //this.loggedIn = this.logged.canActivate();

}

}
