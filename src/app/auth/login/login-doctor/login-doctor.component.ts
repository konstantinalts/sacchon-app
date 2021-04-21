import { Component, OnInit } from '@angular/core';
import { NgForm, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginDoctorService } from './login-doctor.service';

@Component({
  selector: 'app-login-doctor',
  templateUrl: './login-doctor.component.html',
  styleUrls: ['./login-doctor.component.scss']
})
export class LoginDoctorComponent implements OnInit {

  loginFormDoctor!: FormGroup;

  constructor(private formBuilder: FormBuilder, private loginDoctorService:LoginDoctorService, private router:Router){}
 
  ngOnInit(){ 
    this.loginFormDoctor = this.formBuilder.group({
      username: ['', [Validators.required,
           Validators.minLength(4), 
           Validators.maxLength(15)]],
      password: ['', [Validators.required,
          Validators.minLength(4), 
          Validators.maxLength(15)]]
    })
   }

   logInDoctor(){
     let username: string;
     let password: string;
     let responseString = this.loginDoctorService.authenticationD(this.loginFormDoctor.value);
     if(responseString == "OK"){
       username = this.loginFormDoctor.get('username')?.value;
       password = this.loginFormDoctor.get('password')?.value;
       sessionStorage.setItem("credentials",username +":"+ password);
       this.router.navigate(['doctor'])
     }
     else{
       alert("Try again.Wrong username or password");
     }
   }
  onSubmit(f: NgForm) {
    console.log(f.value);
    console.log(f.valid);
  }

}
