import { PatientService } from './../patient.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Patient } from '../patient';

@Component({
  selector: 'app-medidata-insert',
  templateUrl: './medidata-insert.component.html',
  styleUrls: ['./medidata-insert.component.scss']
})
export class MedidataInsertComponent implements OnInit {
  
  form!: FormGroup;

  constructor(private fb: FormBuilder,private patientService: PatientService) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      date:["",],
      time:["",],
      glucoseLevel: ["",],
      carbIntake: ["",]
    })
  }

  onClickSubmit(){
    let patient: Patient = this.form.value;
    this.patientService.addPatient(patient).subscribe( data =>{
      console.log(data)
    })
  }

}
