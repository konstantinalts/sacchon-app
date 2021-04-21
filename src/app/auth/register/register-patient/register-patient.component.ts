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
<<<<<<< HEAD
    fname: ["", [Validators.required,Validators.minLength(3),Validators.maxLength(20)]],
    lname: ["", [Validators.required,Validators.minLength(5),Validators.maxLength(20)]],
    birthdate: ["", Validators.required],
    address: ["", [Validators.required,Validators.minLength(5),Validators.maxLength(30)]],
    telephone: ["", [Validators.required,Validators.minLength(10),Validators.maxLength(10)]],
    email: ["", [Validators.required,Validators.email]],
    username: ["",[Validators.required,Validators.minLength(5),Validators.maxLength(20)]],
    password: ["",[Validators.required,Validators.minLength(8),Validators.maxLength(20)]]
=======
    fname: ["",],
    lname: ["",],
    birthdate: ["",],
    telephone: ["",],
    email: ["",],
    usename: ["",],
    password: ["",]
>>>>>>> b18a8d8cc79c32b70690cb567e8e30e4bc2b8798
  })
}

onClickSubmit(){
  let patient: PatientRegister = this.register.value;
  this.patientRegisterService.addPatient(patient).subscribe(data =>{
    console.log(data)
  })
}

}