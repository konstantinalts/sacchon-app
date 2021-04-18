import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DoctorComponent } from './doctor/doctor.component';
import { MyPatientsComponent } from './my-patients/my-patients.component';
import { AvailablePatientsComponent } from './doctor/available-patients/available-patients.component';



@NgModule({
  declarations: [
    DoctorComponent,
    MyPatientsComponent,
    AvailablePatientsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class DoctorModule { }
