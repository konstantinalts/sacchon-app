import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DoctorRegister } from './doctor-register';

@Injectable({
  providedIn: 'root'
})
export class DoctorRegisterService {

  constructor(private http:HttpClient) { }

  private readonly baseUrl= 'http://localhost:9000/sacchon'

  addDoctor(doctor: DoctorRegister): Observable<DoctorRegister>{
    return this.http.post<DoctorRegister>(
      `${this.baseUrl}/register/doctor`,
      doctor
    )
  }
}
