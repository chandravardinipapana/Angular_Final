import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-labtests',
  templateUrl: './labtests.component.html',
  styleUrls: ['./labtests.component.css']
})
export class LabtestsComponent {
  @Input() testlist:any;
}
