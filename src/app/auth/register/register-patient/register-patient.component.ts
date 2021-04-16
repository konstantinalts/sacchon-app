import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register-patient',
  templateUrl: './register-patient.component.html',
  styleUrls: ['./register-patient.component.scss']
})
export class RegisterPatientComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(f: NgForm) {
    console.log(f.value);
    console.log(f.valid);
  }

}
