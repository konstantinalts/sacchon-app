import { Component, OnInit } from '@angular/core';
import { MyPatientsData } from './my-patients-data';
import { MyPatientsDataService } from './my-patients-data.service';

@Component({
  selector: 'app-my-patients-data',
  templateUrl: './my-patients-data.component.html',
  styleUrls: ['./my-patients-data.component.scss']
})
export class MyPatientsDataComponent implements OnInit {


  constructor(private myPatientsDataService:MyPatientsDataService) { }

  myPatientsData!: MyPatientsData[];

  ngOnInit(): void {
  }

  getMyPatients(){
    this.myPatientsData = [];
    this.myPatientsDataService.getMyPatientsData().subscribe(data =>{
      this.myPatientsData = data ;
      console.log(this.myPatientsData);
    });
  }
}
