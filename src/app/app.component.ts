import { LoginDoctorService } from './auth/login/login-doctor/login-doctor.service';
import { LoginPatientService } from './auth/login/login-patient/login-patient.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy{
  
  title = 'sacchon-app';
  isLogged!:boolean;
  isLoggedDoc!:boolean;

  subscription!: Subscription;
  subscriptionDoc!: Subscription;

  constructor(private router:Router, private loginPatientService:LoginPatientService, private loginDoctorService:LoginDoctorService){}

  ngOnInit(): void {
    if (sessionStorage.getItem("credentials") == null){
      this.isLogged = false;
      this.router.navigate(['home-page'])
    }
    else{
      this.isLogged = true
      this.router.navigate(['userdata'])
    }

    this.subscription = this.loginPatientService.responseOfAuth.subscribe(data =>{
      this.isLogged = data;
    })



    if (sessionStorage.getItem("credentials2") == null){
      this.isLoggedDoc = false;
      this.router.navigate(['home-page'])
    }
    else{
      this.isLoggedDoc = true
      this.router.navigate(['doctor'])
    }

    this.subscriptionDoc = this.loginDoctorService.responseOfAuthDoc.subscribe(data =>{
      this.isLoggedDoc = data;
    })
  }

  ngOnDestroy(): void {
    
    if(this.subscription){
      this.subscription.unsubscribe();
    }

    if(this.subscriptionDoc){
      this.subscriptionDoc.unsubscribe();
    }
  }

  
  logOut(){
    sessionStorage.removeItem("credentials");
    this.isLogged = false;
    this.router.navigate(['login/patient_login'])
  }

  logOutDoc(){
    sessionStorage.removeItem("credentials2");
    this.isLoggedDoc = false;
    this.router.navigate(['login/doctor_login'])
  }


}
