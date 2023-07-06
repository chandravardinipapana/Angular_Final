import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MedicinesService {
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
  public getMedicines():Observable<any>{
  
    return this.http.get("http://localhost:4500/660/medicines",this.httpOptions);
  }

  public getMedicines2(pattern:string):Observable<any>{
    return this.http.get("http://localhost:4500/660/medicines?type="+pattern,this.httpOptions);
  }
  public getMedicinesList():Observable<any>{
  
    return this.http.get("http://localhost:4500/660/medicinedetails",this.httpOptions);
  }
}
