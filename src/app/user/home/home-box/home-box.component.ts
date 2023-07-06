import { Component ,Input} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home-box',
  templateUrl: './home-box.component.html',
  styleUrls: ['./home-box.component.css']
})
export class HomeBoxComponent {
  @Input() doctor:any;
  constructor(private router:Router,private ar:ActivatedRoute){}
}
