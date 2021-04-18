import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-doctor',
  templateUrl: './register-doctor.component.html',
  styleUrls: ['./register-doctor.component.scss']
})
export class RegisterDoctorComponent implements OnInit {

  registerForm!: FormGroup;

  constructor(private fb: FormBuilder) { }

  validationMessages = {
    'fname' : {
      'required': 'First name is required.',
      'minlength': 'First name must be greater than 3 characters.',
      'maxlength': 'First name must be less than 15 characters.'
    },
    'lname' : {
      'required': 'Last name is required.',
      'minlength': 'Last name must be greater than 5 characters.',
      'maxlength': 'Last name must be less than 20 characters.'
    },
    'birthdate' : {
      'required': 'Birthdate is required.'
    },
    'telephone' : {
      'required': 'First name is required.',
      'minlength': 'First name must be 10 characters.',
      'maxlength': 'First name must be 10 characters.'
    },
    'email' : {
      'required': 'Email is required.',
      'minlength': 'Email must be like "example@example.com".'
    },
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
    this.registerForm = this.fb.group({
      fname: ['', Validators.required, Validators.minLength(3), Validators.minLength(15)],
      lname: ['', Validators.required, Validators.minLength(5), Validators.maxLength(20)],
      birthdate: ['', Validators.required],
      telephone: ['', Validators.required, Validators.minLength(10), Validators.maxLength(10)],
      email: ['', Validators.required, Validators.email],
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
