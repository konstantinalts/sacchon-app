import { FormGroup, FormBuilder } from '@angular/forms';
import { PatientRegisterService } from './patient-register.service';
import { Component, OnInit } from '@angular/core';
import { PatientRegister } from './patient-register';


@Component({
  selector: 'app-register-patient',
  templateUrl: './register-patient.component.html',
  styleUrls: ['./register-patient.component.scss']
})
export class RegisterPatientComponent implements OnInit {

register!: FormGroup;
  constructor(private fb: FormBuilder, private patientRegisterService:PatientRegisterService) {}

ngOnInit(): void{
  this.register = this.fb.group({
    fname: [""],
    lname: [""],
    birthdate: [""],
    telephone: [""],
    email: [""],
    usename: [""],
    password: [""]
  })
}

onClickSubmit(){
  let patient: PatientRegister = this.register.value;
  this.patientRegisterService.addPatient(patient).subscribe(data =>{
    console.log(data)
  })
}

}
