import { Component } from '@angular/core';
import { DoctorService } from '../../services/doctor.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  id:any;
  doctor:any;
  details:any;
 constructor(private hs:DoctorService,private ar:ActivatedRoute){
    this.ar.params.subscribe(
      {
        next: (params)=>{ 
         this.id =params['id']
         this.readData()
        },
        error: () => this.id = 0
      }
    )
 }

 readData(){

    this.hs.getDoctorsById(this.id).subscribe({
       next: (data:any)=> this.doctor =data,
       error: ()=> this.doctor = {}
    })

    this.hs.getDetails(this.id).subscribe({
        next: (data:any)=> this.details =data,
        error: ()=> this.details = {}
    })
 }
}
