import { Component, OnInit } from '@angular/core';
import { NgForm, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register-doctor',
  templateUrl: './register-doctor.component.html',
  styleUrls: ['./register-doctor.component.scss']
})
export class RegisterDoctorComponent implements OnInit {


  form: FormGroup;
  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      firstname: '',
      lastname: '',
      birthdate: '',
      telephone: '',
      email: '',
      username: '',
      password: '',
      confirmpassword: ''

    });
  }
  ngOnInit(): void {
    console.log(this.form.value);
  }

  onSubmit(f: NgForm) {
    console.log(f.value);
    console.log(f.valid);
  }

}
