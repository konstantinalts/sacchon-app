import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AvailablePatientsService {

  constructor(private http:HttpClient) { }

  private readonly baseUrl= 'http://localhost:9000/sacchon'

  getMyPatients():Observable<AvailablePatients[]>{
    return this.http.get<AvailablePatients[]>(
      `${this.baseUrl}/patient`
    )
  }
}
