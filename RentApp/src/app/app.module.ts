import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './interceptors/demo.interceptor';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { DemoServiceService } from './demoService/demo-service.service';
import { HttpClientModule } from '@angular/common/http';
import { VehiclesComponent } from './vehicles/vehicles.component';
<<<<<<< HEAD
import { VehiclesReserveComponent } from './vehicles-reserve/vehicles-reserve.component'
=======
import { IsSomeLogged } from './guard/auth.logged';
import { IsAdmin } from './guard/auth.admin';
import { IsManager } from './guard/auth.manager';
import { IsClient } from './guard/auth.client';
>>>>>>> c6202348249524627f497f46aaf93addd9247af1


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
    path: "vehicles",
<<<<<<< HEAD
    component: VehiclesComponent,
    children: ChildRoutes
  }
=======
    component: VehiclesComponent
  },
 
>>>>>>> c6202348249524627f497f46aaf93addd9247af1
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
    VehiclesReserveComponent,
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
