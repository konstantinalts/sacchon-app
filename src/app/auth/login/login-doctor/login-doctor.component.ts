import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login-doctor',
  templateUrl: './login-doctor.component.html',
  styleUrls: ['./login-doctor.component.scss']
})
export class LoginDoctorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(f: NgForm){
    console.log(f.value);
    console.log(f.valid);
  }

}
