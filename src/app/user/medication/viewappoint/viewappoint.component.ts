import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-viewappoint',
  templateUrl: './viewappoint.component.html',
  styleUrls: ['./viewappoint.component.css']
})
export class ViewappointComponent {
  @Input() view:any;
}
