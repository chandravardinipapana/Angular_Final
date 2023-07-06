import { Component } from '@angular/core';
import { MedicinesService } from '../services/medicines.service';

@Component({
  selector: 'app-medication',
  templateUrl: './medication.component.html',
  styleUrls: ['./medication.component.css']
})
export class MedicationComponent {
  medicinelist:any;
  constructor(private hs:MedicinesService){
    this.hs.getMedicines().subscribe(
      {
    next: (data:any)=>this.medicinelist=data,
    error: ()=> this.medicinelist = [] 
   }
   )
  }
}
