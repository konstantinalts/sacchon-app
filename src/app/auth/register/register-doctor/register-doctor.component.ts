import { DoctorRegisterService } from './doctor-register.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DoctorRegister } from './doctor-register';

@Component({
  selector: 'app-register-doctor',
  templateUrl: './register-doctor.component.html',
  styleUrls: ['./register-doctor.component.scss']
})
export class RegisterDoctorComponent implements OnInit {

  register!: FormGroup;
  constructor(private fb: FormBuilder, private patientRegisterService:DoctorRegisterService) {}

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
  let patient: DoctorRegister = this.register.value;
  this.patientRegisterService.addDoctor(patient).subscribe(data =>{
    console.log(data)
  })
}
}
