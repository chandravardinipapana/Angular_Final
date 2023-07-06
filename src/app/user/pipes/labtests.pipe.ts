import { Pipe, PipeTransform } from '@angular/core';
import { TestsService } from '../services/tests.service';

@Pipe({
  name: 'labtests'
})
export class LabtestsPipe implements PipeTransform {
  tests:any=[]
  constructor(private ps:TestsService){
    console.log("running")
     this.ps.getTests().subscribe(
      {next: (tests:any)=>this.tests=tests,
      error: ()=> this.tests =[]}
     )
  }
  transform(target: any, param:string): any {
     return this.tests.filter((x:any)=> x.testname.toLowerCase().startsWith(param.toLowerCase())) ;
  }
}
