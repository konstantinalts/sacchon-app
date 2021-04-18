import { Component, OnInit } from '@angular/core';
import { NgForm, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-doctor',
  templateUrl: './login-doctor.component.html',
  styleUrls: ['./login-doctor.component.scss']
})
export class LoginDoctorComponent implements OnInit {


  loginForm!: FormGroup;

  constructor(private fb: FormBuilder) { }

  validationMessages = {
    'username' : {
      'required': 'Username is required.',
      'minlength': 'First name must be greater than 3 characters.',
      'maxlength': 'First name must be less than 15 characters.'
    },
    'password' : {
      'required': 'Password is required.',
      'minlength': 'First name must be greater than 8 characters.',
      'maxlength': 'First name must be less than 25 characters.'
    }
    
  }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['', Validators.required, Validators.minLength(4), Validators.maxLength(15)],
      password: ['', Validators.required, Validators.minLength(8), Validators.maxLength(25),
      Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')]

    })
  }

  onSubmit(f: NgForm){
    console.log(f.value);
    console.log(f.valid);
  }

}
