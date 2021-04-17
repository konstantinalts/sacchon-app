import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MedidataComponent } from './medidata/medidata.component';



@NgModule({
  declarations: [
    MedidataComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MedidataComponent
  ]
})
export class PatientModule { }
