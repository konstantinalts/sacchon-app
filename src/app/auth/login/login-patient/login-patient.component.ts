import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-patient',
  templateUrl: './login-patient.component.html',
  styleUrls: ['./login-patient.component.scss']
})


export class LoginPatientComponent implements OnInit {


  loginForm: any;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {

    this.loginForm = this.formBuilder.group({

      username: ['', [Validators.required, Validators.email]],

      password: ['', [Validators.required, Validators.maxLength(15), Validators.pattern("^[a-zA-Z]+$")]],

    });

  }

  loginUser() {

    console.log(this.loginForm.get("email"));

    console.log(this.loginForm.get("password"));

  }


}









