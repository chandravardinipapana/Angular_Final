import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ViewBoxComponent } from '../view-box/view-box.component';

@Component({
  selector: 'app-dialogview',
  templateUrl: './dialogview.component.html',
  styleUrls: ['./dialogview.component.css']
})
export class DialogviewComponent {
  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  openDialog() {
    const dialogRef = this.dialog.open(ViewBoxComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
