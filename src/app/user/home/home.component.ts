import { Component } from '@angular/core';
import { DoctorService } from '../services/doctor.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
 doctorlist:any;
  constructor(private hs:DoctorService){
    this.hs.getDoctors().subscribe(
      {
    next: (data:any)=>this.doctorlist=data,
    error: ()=> this.doctorlist = [] 
   }
   )
  }
}
