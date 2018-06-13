import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './interceptors/demo.interceptor';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { DemoServiceService } from './demoService/demo-service.service';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { VehiclesReserveComponent } from './vehicles-reserve/vehicles-reserve.component'
import { ProfileComponent } from './profile/profile.component';
import { IsSomeLogged } from './guard/auth.logged';
import { IsAdmin } from './guard/auth.admin';
import { IsManager } from './guard/auth.manager';
import { IsClient } from './guard/auth.client';


const ChildRoutes =
  [
    {
      path: "vehicles-reserve",
      component: VehiclesReserveComponent
    },
  ]

const Routes= [
  {
    path: "login",
    component: LoginComponent
  },

  {
    path: "register",
    component: RegisterComponent
  },

  {
    path: "home",
    component: HomeComponent
  },

  {
    path: "services",
    component: ServicesComponent
  },
  {
    path: "services/:Id",
    component: VehiclesComponent,
    children: ChildRoutes
  },
  {
    path: "profile",
    component: ProfileComponent
  },

]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    NavbarComponent,
    HomeComponent,
    ServicesComponent,
    VehiclesComponent,
    ProfileComponent,
    VehiclesReserveComponent
    ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(Routes),
    FormsModule,
    HttpClientModule
  ],
  providers: [
    DemoServiceService,
    IsAdmin,
    IsManager,
    IsClient,
    IsSomeLogged,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
    {
      provide: 'IsSomeLogged',
      useValue: () => {
        return true;
      } 
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
