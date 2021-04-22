import { RouterTestingModule } from '@angular/router/testing';
import { LoginPatientService } from './login-patient.service';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from '../login';


@Component({
  selector: 'app-login-patient',
  templateUrl: './login-patient.component.html',
  styleUrls: ['./login-patient.component.scss']
})


export class LoginPatientComponent implements OnInit {

  loginFormPatient!: FormGroup;

  constructor(private formBuilder: FormBuilder, private loginPatientService:LoginPatientService, private router:Router){}

  ngOnInit(){ 
    this.loginFormPatient = this.formBuilder.group({
      username: ['', [Validators.required,
           Validators.minLength(4), 
           Validators.maxLength(15)]],
      password: ['', [Validators.required,
          Validators.minLength(4), 
          Validators.maxLength(15)]]
    })
   }

   logInPatient(){
     let username: string;
     let password: string;
     let login: Login = this.loginFormPatient.value;

     this.loginPatientService.authenticationP(login).subscribe(response=>{
      if(response == "OK"){
        username = this.loginFormPatient.get('username')?.value;
        password = this.loginFormPatient.get('password')?.value;
        sessionStorage.setItem("credentials",username +":"+ password);
        this.router.navigate(['userdata'])
      }
      else{
        alert("Try again.Wrong username or password");
      }
     })
   }

}









