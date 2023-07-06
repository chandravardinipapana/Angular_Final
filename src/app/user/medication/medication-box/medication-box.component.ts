import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-medication-box',
  templateUrl: './medication-box.component.html',
  styleUrls: ['./medication-box.component.css']
})
export class MedicationBoxComponent {
  @Input() medicine:any;
}
