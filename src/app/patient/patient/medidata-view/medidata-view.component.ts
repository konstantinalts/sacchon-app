import { PatientService } from './../patient.service';
import { Component, OnInit } from '@angular/core';
import { Patient } from '../patient';

@Component({
  selector: 'app-medidata-view',
  templateUrl: './medidata-view.component.html',
  styleUrls: ['./medidata-view.component.scss']
})
export class MedidataViewComponent {

  // constructor(private patientService:PatientService) { }


  // patients!: Patient[];

  // ngOnInit(): void {
  // }

  // getPatients(){
  //   this.patients = [];
  //   this.patientService.getPatients().subscribe(data =>{
  //     this.patients = data;
  //     console.log(this.patients);
  //   });
  // }
 

}