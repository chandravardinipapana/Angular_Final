import { Component,Input} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { BookTestComponent } from './book-test/book-test.component';


@Component({
  selector: 'app-tests',
  templateUrl: './tests.component.html',
  styleUrls: ['./tests.component.css']
})
export class TestsComponent {
@Input() test:any;
constructor(private router:Router,private ar:ActivatedRoute,public dialog: MatDialog){}
openDialog2() {
  const dialogRef = this.dialog.open(BookTestComponent);
  dialogRef.afterClosed().subscribe(result => {
    console.log(`Dialog result: ${result}`);
  });
}
}
