import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MedidataInsertComponent } from '../patient/medidata-insert/medidata-insert.component';
import { MedidataViewComponent } from '../patient/medidata-view/medidata-view.component';

const routes: Routes = [
  { path: 'medidata-view', component: MedidataViewComponent },
  { path: 'medidata-insert', component: MedidataInsertComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class PatientRoutingModule { }
