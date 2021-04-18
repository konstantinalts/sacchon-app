import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MyPatientsData } from './my-patients-data';

@Injectable({
  providedIn: 'root'
})
export class MyPatientsDataService {

  constructor(private http:HttpClient) { }

  private readonly baseUrl= 'http://localhost:9000/sacchon'

  getMyPatientsData():Observable<MyPatientsData[]>{
    return this.http.get<MyPatientsData[]>(
      `${this.baseUrl}/medical_data`
    )
  }
}
