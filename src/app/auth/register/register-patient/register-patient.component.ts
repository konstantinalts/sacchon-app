import { FormGroup, FormBuilder, Validators } from '@angular/forms';
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
    fname: ["", [Validators.required,Validators.minLength(3),Validators.maxLength(20)]],
    lname: ["", [Validators.required,Validators.minLength(5),Validators.maxLength(20)]],
    birthdate: ["", Validators.required],
    address: ["", [Validators.required,Validators.minLength(5),Validators.maxLength(30)]],
    telephone: ["", [Validators.required,Validators.minLength(10),Validators.maxLength(10)]],
    email: ["", [Validators.required,Validators.email]],
    username: ["",[Validators.required,Validators.minLength(5),Validators.maxLength(20)]],
    password: ["",[Validators.required,Validators.minLength(8),Validators.maxLength(20)]]
  })
}

onClickSubmit(){
  let patient: PatientRegister = this.register.value;
  this.patientRegisterService.addPatient(patient).subscribe(data =>{
    console.log(data)
  })
}

}