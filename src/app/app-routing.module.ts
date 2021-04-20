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
import { LoginComponent } from './auth/login/login.component';

const routes: Routes = [
  { path: 'userdata/medidata-view', component: MedidataViewComponent },
  { path: 'userdata/medidata-insert', component: MedidataInsertComponent },
  { path: 'userdata', component: PatientComponent},
  { path: 'doctor', component: DoctorComponent},
  { path: 'doctor/my-patients', component: MyPatientsComponent},
  { path: 'doctor/available-patients', component: AvailablePatientsComponent},
  { path: 'doctor/my-patients/my-patients-data', component: MyPatientsDataComponent},
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent }



  // { path: 'userdata/consultations-view', component: ConsultationsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
