import { Router } from '@angular/router';
import { PatientService } from './../patient.service';
import { Component, OnInit } from '@angular/core';
import { Patient } from '../patient';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-medidata-view',
  templateUrl: './medidata-view.component.html',
  styleUrls: ['./medidata-view.component.scss']
})
export class MedidataViewComponent implements OnInit{

  constructor(private patientService:PatientService, private router:Router) { }


  patients!: Patient[];


  // getPatients(){
    
  // }

  ngOnInit() {
    
  }


  getPatients(){
    this.patients = [];
    this.patientService.getPatients().subscribe(data =>{
      this.patients = data.data;
      console.log(this.patients);
    });
  }
 

}