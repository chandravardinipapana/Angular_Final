import { Pipe, PipeTransform } from '@angular/core';
import { AppointmentService } from '../services/appointment.service';

@Pipe({
  name: 'state'
})
export class StatePipe implements PipeTransform {
  
  states:any=[]
  constructor(private ps:AppointmentService){
    console.log("running")
     this.ps.getStates().subscribe(
      {next: (states:any)=>this.states=states,
      error: ()=> this.states =[]}
     )
  }
  transform(target: any, param:string): any {
     return this.states.filter((x:any)=> x.state.toLowerCase().startsWith(param.toLowerCase())) ;
  }
}
