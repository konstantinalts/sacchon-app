import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginDoctorService {

  params = new HttpParams();

  responseOfAuthDoc = new Subject<boolean>();

  constructor(private http:HttpClient) { }

  private readonly baseUrl= 'http://localhost:9000/sacchon'

  authenticationD(values:any): string{
    if(true){
      this.responseOfAuthDoc.next(true);
      return "OK";
    }

    // this.params.append('username',values.get('username').value);
    // this.params.append('password',values.get('password').value);
    // return this.http.get<any>('${this.baseUrl}/login_doctor',
    // {params:this.params})

  }
}