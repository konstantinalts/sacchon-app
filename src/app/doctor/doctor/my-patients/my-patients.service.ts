import { MyPatients } from './my-patients';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MyPatientsService {

  constructor(private http:HttpClient) { }

  private readonly baseUrl= 'http://localhost:9000/sacchon'

  getMyPatients():Observable<MyPatients[]>{
    return this.http.get<MyPatients[]>(
      `${this.baseUrl}/patient`
    )
  }
}
