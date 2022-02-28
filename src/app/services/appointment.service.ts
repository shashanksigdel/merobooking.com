import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Appointment } from '../interfaces/appointment';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  apiUrl = ' http://localhost:3000/appointments';

  constructor( private http: HttpClient) { }

  all(): Observable<Appointment[]>{
    return this.http.get<Appointment[]>(this.apiUrl)
  }
  
  create(data:any): Observable<Appointment[]>{
    return this.http.post<Appointment[]>(this.apiUrl,data)
  }

  get(id:number):Observable<Appointment>{
    return this.http.get<Appointment>(`${this.apiUrl}/${id}`)
  }

  update(id:number, data:any):Observable<Appointment>{
    return this.http.put<Appointment>(`${this.apiUrl}/${id}`, data)
  }

  delete(id:number):Observable<void>{
    return this.http.delete<void>(`${this.apiUrl}/${id}`)
  }
}
