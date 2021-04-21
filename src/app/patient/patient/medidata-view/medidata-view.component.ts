import { PatientService } from './../patient.service';
import { Component, OnInit } from '@angular/core';
import { Patient } from '../patient';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-medidata-view',
  templateUrl: './medidata-view.component.html',
  styleUrls: ['./medidata-view.component.scss']
})
export class MedidataViewComponent implements OnInit {

  constructor(private patientService:PatientService) { }

  patients!: Patient[];

  ngOnInit(): void {
  }

  getPatients(){
    sessionStorage.setItem("credentials","user:123456789")
    this.patients = [];
    this.patientService.getPatients().subscribe(data =>{
      this.patients = data;
      console.log(this.patients),
      {headers:new HttpHeaders({'Authorization': 'Basic ' + btoa(sessionStorage.getItem("credentials")!)})}
    })
  }

}
