import { ApiResult } from './../../api-result';
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

  getPatients():Observable<ApiResult<Patient[]>>{
    return this.http.get<ApiResult<Patient[]>>(
      `${this.baseUrl}/medical_data`
    )
  }
}
