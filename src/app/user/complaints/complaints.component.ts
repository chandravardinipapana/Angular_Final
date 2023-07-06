import { Component, ElementRef } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ComplaintService } from '../services/complaint.service';
import { Observable, map, startWith } from 'rxjs';

@Component({
  selector: 'app-complaints',
  templateUrl: './complaints.component.html',
  styleUrls: ['./complaints.component.css']
})
export class ComplaintsComponent {
  fname:any;
  email:any;
  product:any;
  message:any; 
  errors:string[]=[];
  submitted: boolean = false;
  complaintForm:FormGroup = new FormGroup({
    name : new FormControl('',Validators.required),
    email : new FormControl('',Validators.required),
    address : new FormControl('',Validators.required)
  });
  selectorToFocus : String = 'textArea,input';
  constructor(private hs:ComplaintService, private formBuilder:FormBuilder,private el:ElementRef) { }
  
  submit(){
    this.errors = []
    let expr=/^[a-z][a-z\._0-9]+@[a-z]+\.(com|net|co\.in|in)$/;
    if(this.fname==undefined || this.fname.length<3)
      this.errors.push("First name should be greatr than 3 characters")
    if(this.email==undefined || !expr.test(this.email))
      this.errors.push("Should be in email format")
    if(this.message==undefined || this.message.length<5)
      this.errors.push("Message should be greate than 5 characters")

      if(this.errors.length==0){
        let obj={
          id:Math.round(Math.random()*100000),
          fname: this.fname,
          email: this.email,
          product:this.product,
          message: this.message

        }
        this.hs.postEnquiry(obj).subscribe({
          next: ()=>{
            alert("Thanks for valueble feedback")
            this.fname="",
            this.email="",
            this.product="",
            this.message=""
          },
          error: ()=>alert("there is a problem posting your complaint")
        }
        )
      }
  }
  // submit1(){
  //   this.submitted = true;
  //   if(!this.complaintForm.valid){
  //     const formGroupInvalid = document.getElementsByClassName('ng-invalid');
  //     console.log(formGroupInvalid)
  //     // formGroupInvalid[1].focus();
  //     let elementToOffset = this.getElementToOffset(formGroupInvalid[1]);
  //     document.documentElement.scrollTop = elementToOffset.offsetTop;
  //     this.setFocusOnError(elementToOffset);
  //     return;
  //   }

  // }
  // getElementToOffset(element : any){
  //   let defaultElement = element;
  //   while (!(element.parentElement instanceof HTMLFormElement)){
  //     if (element.parentElement){
  //       element = element.parentElement;
  //     }else{
  //       return defaultElement;
  //     }
  //   }
  //   return element;
  // }

  // setFocusOnError(elementToOffset : any){
  //   console.log(elementToOffset)
  //   let listaElementos = elementToOffset.querySelectorAll(this.selectorToFocus);
  //   if (listaElementos.length>0){
  //     listaElementos[0].focus();
  //     (listaElementos[0] as HTMLElement).classList.add('error-field')
  //   }
  //   // elementToOffset.focus();
  // }
}
