import { Login } from './../login';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginPatientService {

  params = new HttpParams();

  responseOfAuth = new Subject<boolean>();

  constructor(private http:HttpClient) { }

  private readonly baseUrl= 'http://localhost:9000/sacchon'

  authenticationP(values:Login): Observable<any>{
    console.log(values)
    return this.http.post<any>(`${this.baseUrl}/login/patient`,
    values)

  }
}
