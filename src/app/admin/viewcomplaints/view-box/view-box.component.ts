import { Component,Input } from '@angular/core';
import { ViewService } from '../../services/view.service';

@Component({
  selector: 'app-view-box',
  templateUrl: './view-box.component.html',
  styleUrls: ['./view-box.component.css']
})
export class ViewBoxComponent {
  @Input() viewlist:any;
  constructor(private hs:ViewService){
    this.hs.getViews().subscribe(
      {
    next: (data:any)=>this.viewlist=data,
    error: ()=> this.viewlist = [] 
   }
   )
  }
}
