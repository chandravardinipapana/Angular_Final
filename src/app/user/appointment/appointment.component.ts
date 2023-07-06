import { Component } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { Observable, map, startWith } from 'rxjs';
import { AppointmentService } from '../services/appointment.service';
import { MatDialogRef } from '@angular/material/dialog';
import { MatCalendarCellClassFunction } from '@angular/material/datepicker';
@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent {
  fname:any;
  email:any;
  message:any;
  mobile:any;
  sname:any;
  pcode:any;
  city:string=""
  cities:any=[];
  specilization:string=""
  specilizations:any=[];
  errors:string[]=[];
  date:any=[];
  age:any=[];
  dateClass: MatCalendarCellClassFunction<Date> = (cellDate, view) => {
    // Only highligh dates inside the month view.
    if (view === 'month') {
      const date = cellDate.getDate();

      // Highlight the 1st and 20th day of each month.
      return date === 1 || date === 20 ? 'example-custom-date-class' : '';
    }

    return '';
  };
  displayFn(data:any):string{
    return data;
  }
  displayFn1(data:any):string{
    return data;
  }
  constructor(private hs:AppointmentService,
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<AppointmentComponent>,
    private _formBuilder: FormBuilder
  ) { }
  submit(){
    this.errors = []
    let expr=/^[a-z][a-z\._0-9]+@[a-z]+\.(com|net|co\.in|in)$/;
    if(this.fname==undefined || this.fname.length<3)
      this.errors.push("First name should be greatr than 3 characters")
    if(this.mobile==undefined || this.mobile.length<10)
      this.errors.push("Mobile no Should be 10 digits")
    if(this.email==undefined || !expr.test(this.email))
      this.errors.push("Should be in email format")
    if(this.city==undefined || this.city.length>20)
      this.errors.push("City is not Available")
    if(this.message==undefined || this.message.length<5)
      this.errors.push("Message should be greate than 5 characters")
    if(this.age==undefined || this.age.length<0)
      this.errors.push("Age Should not be negative")


      if(this.errors.length==0){
        let obj={
          id:Math.round(Math.random()*100000),
          fname: this.fname,
          age:this.age,
          mobile:this.mobile,
          email: this.email,
          date: this.date,
          city:this.city,
          message: this.message
        }
        this.hs.postEnquiry(obj).subscribe({
          next: ()=>{
            alert("Your Appointment is Booked")
            this.fname="",
            this.age="",
            this.mobile="",
            this.email="",
            this.date="",
            this.message="",
            this.city=""

          },
          error: ()=>alert("there is a problem Booking your appointment")
        }
        )
      }
  }
}
