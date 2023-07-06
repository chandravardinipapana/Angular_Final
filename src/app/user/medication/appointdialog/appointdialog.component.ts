import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ViewappointBoxComponent } from '../viewappoint-box/viewappoint-box.component';

@Component({
  selector: 'app-appointdialog',
  templateUrl: './appointdialog.component.html',
  styleUrls: ['./appointdialog.component.css']
})
export class AppointdialogComponent {

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  openDialog1() {
    const dialogRef = this.dialog.open(ViewappointBoxComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
