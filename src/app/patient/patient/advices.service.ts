import { Observable } from 'rxjs';
import { ApiResult } from './../../api-result';
import { Advices } from './advices';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdvicesService {

  constructor(private http:HttpClient) { }

  private readonly baseUrl= 'http://localhost:9000/sacchon'

  getAdvices():Observable<ApiResult<Advices[]>>{
    return this.http.get<ApiResult<Advices[]>>(
      `${this.baseUrl}/medical_report`
    )
  }
}
