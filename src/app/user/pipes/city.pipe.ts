import { Pipe, PipeTransform } from '@angular/core';
import { AppointmentService } from '../services/appointment.service';

@Pipe({
  name: 'city'
})
export class CityPipe implements PipeTransform {

  places:any=[]
  constructor(private as:AppointmentService){
    console.log("running")
     this.as.getPlaces().subscribe(
      {next: (places:any)=>this.places=places,
      error: ()=> this.places =[]}
     )
  }
  transform(target: any, param:string): any {
    
  
     return this.places.filter((x:any)=> x.city.toLowerCase().startsWith(param.toLowerCase())) ;
  }

}
