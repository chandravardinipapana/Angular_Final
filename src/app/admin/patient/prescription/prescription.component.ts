import { Component } from '@angular/core';
import { PrescriptionService } from '../../services/prescription.service';

@Component({
  selector: 'app-prescription',
  templateUrl: './prescription.component.html',
  styleUrls: ['./prescription.component.css']
})
export class PrescriptionComponent {
  fname:any;
  email:any;
  age:any;
  message:any;
  errors:string[]=[];
  constructor(private hs:PrescriptionService) { }
  submit(){
    this.errors = []
   
    let expr=/^[a-z][a-z\._0-9]+@[a-z]+\.(com|net|co\.in|in)$/;
    if(this.fname==undefined || this.fname.length<3)
      this.errors.push("First name should be greatr than 3 characters")
    if(this.age==undefined || this.age<0)
      this.errors.push("Check age ")
    if(this.email==undefined || !expr.test(this.email))
      this.errors.push("Should be in email format")
    if(this.message==undefined || this.message.length<5)
      this.errors.push("Message should be greate than 5 characters")

      if(this.errors.length==0){
        let obj={
          id:Math.round(Math.random()*100000),
          fname: this.fname,
          email: this.email,
          age: this.age,
          message: this.message

        }
        this.hs.postEnquiry(obj).subscribe({
          next: ()=>{
            alert("Thanks for value Prescription")
            this.fname="",
            this.age="",
            this.email="",
            this.message=""
          },
          error: ()=>alert("there is a problem posting your Prescription")
        }
        )
      }
  }
}
