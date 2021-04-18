import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

// constructor(private formBuilder: FormBuilder) { }

//   ngOnInit() {
//     this.registeruserForm = this.formBuilder.group({
//       fname:['',[Validators.required, Validators.minLength(2)]],
//       lname:['',[Validators.required, Validators.minLength(2)]],
//       birthdate:['',[Validators.required, Validators.minLength(2)]],
//       address:['',[Validators.required, Validators.minLength(2)]],
//       telephone:['',[Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
//       email: ['', [Validators.required, Validators.email]],
//       username:['',[Validators.required, Validators.minLength(2)]],
//       password: ['', [Validators.required, Validators.maxLength(15), Validators.pattern("^[a-zA-Z]+$")]]

//     });
//   }
