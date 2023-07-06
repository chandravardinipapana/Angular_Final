import { Component,Input } from '@angular/core';
import { LabtestsService } from '../../services/labtests.service';

@Component({
  selector: 'app-labtest-box',
  templateUrl: './labtest-box.component.html',
  styleUrls: ['./labtest-box.component.css']
})
export class LabtestBoxComponent {
  @Input() testlist:any;
  constructor(private hs:LabtestsService){
    this.hs.getLabTests().subscribe(
      {
    next: (data:any)=>this.testlist=data,
    error: ()=> this.testlist = [] 
   }
   )
  }
}
