import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AppointmentComponent } from '../appointment/appointment.component';

@Component({
  selector: 'app-menu-outline',
  templateUrl: './menu-outline.component.html',
  styleUrls: ['./menu-outline.component.css']
})
export class MenuOutlineComponent {
  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  openDialog() {
    const dialogRef = this.dialog.open(AppointmentComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
