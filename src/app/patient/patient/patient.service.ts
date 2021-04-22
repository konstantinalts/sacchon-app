import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Patient } from './patient';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  constructor(private http:HttpClient) { }

  private readonly baseUrl= 'http://localhost:9000/sacchon'

  getPatients():Observable<Patient[]>{
    // return this.http.get<Patient[]>(
    //   `${this.baseUrl}/medical_data`
    // )


    return this.http.get<Patient[]>(
     `${this.baseUrl}/medical_data`,
     {headers: new HttpHeaders({'Authorization':'Basic' + btoa(sessionStorage.getItem("credentials")!)})}
    )
}

  addPatient(patient: Patient): Observable<Patient>{
    return this.http.post<Patient>(
      `${this.baseUrl}/medical_data`,
      patient,
      {headers: new HttpHeaders({'Authorization':'Basic' + btoa(sessionStorage.getItem("credentials")!)})}
    )
  }
}
