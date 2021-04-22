import { AdvicesService } from './../advices.service';
import { Advices } from './../advices';
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


  constructor(private patientService:PatientService,private adviceService:AdvicesService, private router:Router) { }


  patients!: Patient[];

  advices!: Advices[];


  // getPatients(){
    
  // }

  ngOnInit() {
    
  }

  getAdvices(){
    this.advices = [];
    this.adviceService.getAdvices().subscribe(data => {
      this.advices = data.data;
      console.log(this.advices);
    })
  }

  getPatients(){
    this.patients = [];
    this.patientService.getPatients().subscribe(data =>{
      this.patients = data.data;
      console.log(this.patients);
    });
  }
 

}