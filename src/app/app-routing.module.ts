import { DoctorComponent } from './doctor/doctor/doctor.component';
import { MedidataViewComponent } from './patient/patient/medidata-view/medidata-view.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatientComponent } from './patient/patient/patient.component';
import { MedidataInsertComponent } from './patient/patient/medidata-insert/medidata-insert.component';

const routes: Routes = [
  { path: 'userdata/medidata-view', component: MedidataViewComponent },
  { path: 'userdata/medidata-insert', component: MedidataInsertComponent },
  { path: 'userdata', component: PatientComponent},
  { path: 'doctor', component: DoctorComponent}
  // { path: 'userdata/consultations-view', component: ConsultationsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
