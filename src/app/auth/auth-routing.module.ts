import { MedidataComponent } from './../patient/medidata/medidata.component';
import { RegisterDoctorComponent } from './register/register-doctor/register-doctor.component';
import { RegisterPatientComponent } from './register/register-patient/register-patient.component';
import { LoginDoctorComponent } from './login/login-doctor/login-doctor.component';
import { LoginPatientComponent } from './login/login-patient/login-patient.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  { path: 'login/patient_login', component: LoginPatientComponent },
  { path: 'login/doctor_login', component: LoginDoctorComponent },
  { path: 'register/patient_register', component: RegisterPatientComponent },
  { path: 'register/doctor_register', component: RegisterDoctorComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
