import { Observable } from 'rxjs';
import { Medidata } from './medidata';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MedidataService {

  constructor(private http:HttpClient) { }

  private readonly baseUrl= 'http://localhost:9000/sacchon/medical_data'

  addMediData(medidata: Medidata): Observable<Medidata>{
    return this.http.post<Medidata>(
      `${this.baseUrl}/medical_data`,
      medidata
    )
  }
}
