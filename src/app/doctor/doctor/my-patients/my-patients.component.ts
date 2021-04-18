import { MyPatientsService } from './my-patients.service';
import { Component, OnInit } from '@angular/core';
import { MyPatients } from './my-patients';

@Component({
  selector: 'app-my-patients',
  templateUrl: './my-patients.component.html',
  styleUrls: ['./my-patients.component.scss']
})
export class MyPatientsComponent implements OnInit {

  constructor(private myPatientsService:MyPatientsService) { }

  myPatients!: MyPatients[];

  ngOnInit(): void {
  }

  getMyPatients(){
    this.myPatients = [];
    this.myPatientsService.getMyPatients().subscribe(data =>{
      this.myPatients = data ;
      console.log(this.myPatients);
    });
  }

}
