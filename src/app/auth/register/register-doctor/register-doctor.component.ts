import { DoctorRegisterService } from './doctor-register.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DoctorRegister } from './doctor-register';

@Component({
  selector: 'app-register-doctor',
  templateUrl: './register-doctor.component.html',
  styleUrls: ['./register-doctor.component.scss']
})
export class RegisterDoctorComponent implements OnInit {

  register!: FormGroup;
  constructor(private fb: FormBuilder, private doctorRegisterService: DoctorRegisterService) { }

  ngOnInit(): void {
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

  onClickSubmit() {
    let doctor: DoctorRegister = this.register.value;
    this.doctorRegisterService.addDoctor(doctor).subscribe(data => {
      console.log(data)
    })
  }

}
