import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TestsService {

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
  public getItems():Observable<any>{
  
    return this.http.get("http://localhost:4500/tests",this.httpOptions);
}
postEnquiry(obj:any):Observable<any>{

  this.httpOptions =  new HttpHeaders({
    'Content-Type':  'application/json',
  })

return this.http.post("http://localhost:4500/labreports",obj,this.httpOptions);
}
getTests():Observable<any> {
  return this.http.get("http://localhost:4500/tests")
}
}
