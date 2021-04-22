import { HomePageComponent } from './home/home-page/home-page.component';
import { MyPatientsDataComponent } from './doctor/doctor/my-patients/my-patients-data/my-patients-data.component';
import { AvailablePatientsComponent } from './doctor/doctor/available-patients/available-patients.component';
import { DoctorComponent } from './doctor/doctor/doctor.component';
import { MedidataViewComponent } from './patient/patient/medidata-view/medidata-view.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatientComponent } from './patient/patient/patient.component';
import { MedidataInsertComponent } from './patient/patient/medidata-insert/medidata-insert.component';
import { MyPatientsComponent } from './doctor/doctor/my-patients/my-patients.component';
import { RegisterComponent } from './auth/register/register.component';
import { LoginPatientComponent } from './auth/login/login-patient/login-patient.component';
import { LoginDoctorComponent } from './auth/login/login-doctor/login-doctor.component';
import { RegisterPatientComponent } from './auth/register/register-patient/register-patient.component';
import { RegisterDoctorComponent } from './auth/register/register-doctor/register-doctor.component';


const routes: Routes = [
  { path: 'doctor/medidata-view', component: MedidataViewComponent },
  { path: 'userdata/medidata-insert', component: MedidataInsertComponent },
  { path: 'userdata', component: PatientComponent},
  { path: 'doctor', component: DoctorComponent},
  { path: 'doctor/my-patients', component: MyPatientsComponent},
  { path: 'doctor/available-patients', component: AvailablePatientsComponent},
  { path: 'doctor/my-patients/my-patients-data', component: MyPatientsDataComponent},
  { path: 'register', component: RegisterComponent },
  { path: 'home-page', component: HomePageComponent},
  { path: '',redirectTo: '/home-page', pathMatch:'full'},
  { path: 'login/patient_login', component: LoginPatientComponent },
  { path: 'login/doctor_login', component: LoginDoctorComponent },
  { path: 'register/patient_register', component: RegisterPatientComponent },
  { path: 'register/doctor_register', component: RegisterDoctorComponent },
  { path: 'register', component: RegisterComponent }
  



  // { path: 'userdata/consultations-view', component: ConsultationsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
