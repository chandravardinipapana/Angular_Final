import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  lang:any= "english"
  languages:any=[
    {name:"English",value:"english"},
    {name:"Tamil",value:"tamil"},
    {name:"Telugu",value:"telugu"},
    {name:"Hindi",value:"hindi"}

  ]
  constructor(private router: Router,
    private ts:TranslateService) {
    this.ts.use(this.lang)
  }
  logout() {
    this.router.navigate(['/login']);
  }
  changeLang():void{
    this.ts.use(this.lang)
 }
}
