import { ApiResult } from './../../api-result';
import { Doctor } from './doctor';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  constructor(private http:HttpClient) { }

  private readonly baseUrl= 'http://localhost:9000/sacchon'

  getPatients():Observable<ApiResult<Doctor[]>>{
    return this.http.get<ApiResult<Doctor[]>>(
      `${this.baseUrl}/patient`
    )
  }
}
