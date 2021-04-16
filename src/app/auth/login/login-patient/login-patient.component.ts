import { Component, OnInit } from '@angular/core';
import { FormBuilder, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-patient',
  templateUrl: './login-patient.component.html',
  styleUrls: ['./login-patient.component.scss']
})


export class LoginPatientComponent implements OnInit {


  ngOnInit() {}


  onSubmit(f: NgForm){
    console.log(f.value);
    console.log(f.valid);
  }
}









