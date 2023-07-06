import { Component,Input } from '@angular/core';
import { AppointDialogService } from '../../services/appoint-dialog.service';

@Component({
  selector: 'app-viewappoint-box',
  templateUrl: './viewappoint-box.component.html',
  styleUrls: ['./viewappoint-box.component.css']
})
export class ViewappointBoxComponent {
  @Input() viewlist:any;
  constructor(private hs:AppointDialogService){
    this.hs.getViews().subscribe(
      {
    next: (data:any)=>this.viewlist=data,
    error: ()=> this.viewlist = [] 
   }
   )
  }
}
