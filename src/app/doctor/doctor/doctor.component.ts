import { Router } from '@angular/router';
import { DoctorService } from './doctor.service';
import { Component, OnInit } from '@angular/core';
import { Doctor } from './doctor';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.scss']
})
export class DoctorComponent implements OnInit {

  constructor(private doctorService:DoctorService, private router:Router) { }


  doctors!: Doctor[];


  // getPatients(){
    
  // }

  ngOnInit() {
    
  }


  getPatients(){
    this.doctors = [];
    this.doctorService.getPatients().subscribe(data =>{
      this.doctors = data.data;
      console.log(this.doctors);
    });
  }

}
