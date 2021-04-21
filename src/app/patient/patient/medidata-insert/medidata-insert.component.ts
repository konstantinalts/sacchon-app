import { MedidataService } from './medidata.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Medidata } from './medidata';

@Component({
  selector: 'app-medidata-insert',
  templateUrl: './medidata-insert.component.html',
  styleUrls: ['./medidata-insert.component.scss']
})
export class MedidataInsertComponent implements OnInit {
  
  form!: FormGroup;

  constructor(private fb: FormBuilder,private mediData:MedidataService) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      date:["", Validators.required],
      time:["", Validators.required],
      glucoseLevel: ["", Validators.required],
      carbIntake: ["", Validators.required]
    })
  }

  onClickSubmit(){
    let mediData: Medidata = this.form.value;
    this.mediData.addMediData(mediData).subscribe( data =>{
      console.log(data)
    })
  }

}
