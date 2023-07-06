import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PatientService {
  httpOptions:any;
  constructor(private http:HttpClient
    ) { 

      this.httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json',
          'Authorization': "Bearer "+sessionStorage.getItem("token")
        })
      }
    }
  public getPatients():Observable<any>{
  
    return this.http.get("http://localhost:4500/appointments",this.httpOptions);
  }
}
