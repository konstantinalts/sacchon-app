import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { LoginPatientComponent } from './login/login-patient/login-patient.component';
import { LoginDoctorComponent } from './login/login-doctor/login-doctor.component';
import { RegisterDoctorComponent } from './register/register-doctor/register-doctor.component';
import { RegisterPatientComponent } from './register/register-patient/register-patient.component';


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    LoginPatientComponent,
    LoginDoctorComponent,
    RegisterDoctorComponent,
    RegisterPatientComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule
  ],
  exports: [
    LoginComponent,
    RegisterComponent,
    LoginPatientComponent,
    LoginDoctorComponent,
    RegisterDoctorComponent,
    RegisterPatientComponent
  ]
})
export class AuthModule { }
