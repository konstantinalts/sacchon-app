import { RegisterDoctorComponent } from './register/register-doctor/register-doctor.component';
import { RegisterPatientComponent } from './register/register-patient/register-patient.component';
import { LoginDoctorComponent } from './login/login-doctor/login-doctor.component';
import { LoginPatientComponent } from './login/login-patient/login-patient.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'patient_login', component: LoginPatientComponent },
  { path: 'doctor_login', component: LoginDoctorComponent },
  { path: 'patient_register', component: RegisterPatientComponent },
  { path: 'doctor_register', component: RegisterDoctorComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
