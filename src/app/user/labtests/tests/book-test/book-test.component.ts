import { Component,OnInit} from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { MatCalendarCellClassFunction } from '@angular/material/datepicker';
import { TestsService } from 'src/app/user/services/tests.service';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
@Component({
  selector: 'app-book-test',
  templateUrl: './book-test.component.html',
  styleUrls: ['./book-test.component.css']
})
export class BookTestComponent implements OnInit{
  fname:any;
  age:any;
  date:any=[];
  gender:any=[]
  errors:string[]=[];
  city:string=""
  cities:any=[]
  mobile:any=[];
  email:any=[];
  address:any=[];
  state:string=""
  states:any=[];
  pincode:any=[];
  test:string=""
  tests:any=[];
  dateClass: MatCalendarCellClassFunction<Date> = (cellDate, view) => {
    // Only highligh dates inside the month view.
    if (view === 'month') {
      const date = cellDate.getDate();

      // Highlight the 1st and 20th day of each month.
      return date === 1 || date === 20 ? 'example-custom-date-class' : '';
    }

    return '';
  };
  myControl = new FormControl('');
  options: string[] = ['Male', 'Female', 'other'];
  filteredOptions!: Observable<string[]>;

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }
  displayFn(data:any):string{
    return data;
  }
  displayFn1(data:any):string{
    return data;
  }
  constructor(private hs:TestsService,
    private fb: FormBuilder){}
    submit(){
      this.errors = []
      let expr=/^[a-z][a-z\._0-9]+@[a-z]+\.(com|net|co\.in|in)$/;
      if(this.fname==undefined || this.fname.length<3)
        this.errors.push("First name should be greatr than 3 characters")
      if(this.age==undefined || this.age.length<0)
        this.errors.push("Age Should not be Negative")
      if(this.mobile==undefined || this.mobile.length<10) 
        this.errors.push("Mobile no should be less than 10 digits")
      if(this.email==undefined || !expr.test(this.email))
        this.errors.push("Should be in email format")
      if(this.pincode==undefined || this.pincode.length<6) 
        this.errors.push("check pincode")
      
        if(this.errors.length==0){
          let obj={
            id:Math.round(Math.random()*100000),
            fname: this.fname,
            age:this.age,
            date: this.date,
            gender:this.gender,
            mobile:this.mobile,
            email:this.email,
            address:this.address,
            city:this.city,
            state:this.state,
            pincode:this.pincode,
            test:this.test
             
          }
          this.hs.postEnquiry(obj).subscribe({
            next: ()=>{
              alert("Your Appointment is Booked")
              this.fname="",
              this.age="",
              this.date="",
              this.gender,
              this.mobile,
              this.email,
              this.address,
              this.city,
              this.state,
              this.pincode,
              this.test
            },
            error: ()=>alert("there is a problem Booking your appointment")
          })
}
}
}
