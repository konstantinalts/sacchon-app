import { Component, OnInit } from '@angular/core';
import { MyPatientsData } from './my-patients-data';
import { MyPatientsDataService } from './my-patients-data.service';

@Component({
  selector: 'app-my-patients-data',
  templateUrl: './my-patients-data.component.html',
  styleUrls: ['./my-patients-data.component.scss']
})
export class MyPatientsDataComponent implements OnInit {

  // constructor(){}

  // public barChartOptions = {
  //   scaleShowVerticalLines: false,
  //   responsive: true
  // };
  // public barChartLabels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  // public barChartType = 'bar';
  // public barChartLegend = true;
  // public barChartData = [
  //   {data: [65, 59, 80, 81, 56, 55, 40], label: 'Glucose Level'},
  //   {data: [28, 48, 40, 19, 86, 27, 90], label: 'Carb Intake'}
  // ];
//   ngOnInit() {
//   }
// }



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
