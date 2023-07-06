import { Component,Input } from '@angular/core';
import { TestsService } from '../../services/tests.service';

@Component({
  selector: 'app-labs',
  templateUrl: './labs.component.html',
  styleUrls: ['./labs.component.css']
})
export class LabsComponent {
  @Input() testlist:any;
  constructor(private hs:TestsService){
    this.hs.getItems().subscribe(
      {
    next: (data:any)=>this.testlist=data,
    error: ()=> this.testlist = [] 
   }
   )
  }
}
