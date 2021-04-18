
import { AppRoutingModule } from './../app-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientComponent } from './patient/patient.component';
import { MedidataInsertComponent } from './patient/medidata-insert/medidata-insert.component';
import { MedidataViewComponent } from './patient/medidata-view/medidata-view.component';
import { ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    MedidataInsertComponent,
    MedidataViewComponent,
    PatientComponent
    // PatientComponent,
    // HttpClientModule    
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  // exports: [
  //   MedidataInsertComponent,
  //   MedidataViewComponent,
  //   PatientComponent
  // ]
})
export class PatientModule { }
