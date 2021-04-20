import { PatientRegister } from './patient-register';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PatientRegisterService {

  constructor(private http:HttpClient) { }

  private readonly baseUrl= 'http://localhost:9000/sacchon'

  addPatient(patient: PatientRegister): Observable<PatientRegister>{
    return this.http.post<PatientRegister>(
      `${this.baseUrl}/register/user`,
      patient
    )
  }
}
