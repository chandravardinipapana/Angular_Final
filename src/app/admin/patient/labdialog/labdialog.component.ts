import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LabtestBoxComponent } from '../labtest-box/labtest-box.component';

@Component({
  selector: 'app-labdialog',
  templateUrl: './labdialog.component.html',
  styleUrls: ['./labdialog.component.css']
})
export class LabdialogComponent {
  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  openDialog() {
    const dialogRef = this.dialog.open(LabtestBoxComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
