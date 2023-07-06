import { Component } from '@angular/core';
import { PatientService } from '../services/patient.service';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent {
  patientlist:any;
  searchTerm: any;
  search() {
    console.log(this.searchTerm); // Replace with your search logic
  }
  constructor(private hs:PatientService){
    this.hs.getPatients().subscribe(
      {
    next: (data:any)=>this.patientlist=data,
    error: ()=> this.patientlist = [] 
   }
   )
  }
}
