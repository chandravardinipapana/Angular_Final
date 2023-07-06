import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {
  httpOptions:any;
  constructor(private http:HttpClient){

  }
  
  postEnquiry(obj:any):Observable<any>{

      this.httpOptions =  new HttpHeaders({
        'Content-Type':  'application/json',
      })
    
    return this.http.post("http://localhost:4500/appointments",obj,this.httpOptions);
   }
   getPlaces():Observable<any> {
    return this.http.get("http://localhost:4500/places")
  }
  getPlaces1():Observable<any> {
    return this.http.get("http://localhost:4500/places1")
  }
  getSpecilization():Observable<any> {
    return this.http.get("http://localhost:4500/specializations")
  }
  getStates():Observable<any> {
    return this.http.get("http://localhost:4500/states")
  }
}
