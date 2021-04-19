import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-patient',
  templateUrl: './register-patient.component.html',
  styleUrls: ['./register-patient.component.scss']
})
export class RegisterPatientComponent implements OnInit {

  ngOnInit():void {  }




  onSubmit(f: NgForm) {
    console.log(f.value);
    console.log(f.valid);
  }

}
