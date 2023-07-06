import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-labtest',
  templateUrl: './labtest.component.html',
  styleUrls: ['./labtest.component.css']
})
export class LabtestComponent {
  @Input() item:any;
}
