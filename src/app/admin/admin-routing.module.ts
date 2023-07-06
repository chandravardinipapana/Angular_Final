import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PatientComponent } from './patient/patient.component';
import { ViewcomplaintsComponent } from './viewcomplaints/viewcomplaints.component';
import { MenuComponent } from './menu/menu.component';

const routes: Routes = [
  {path:'',component:HomeComponent,
  children:[
    {path:'menu',component:MenuComponent},
    {path:'patient',component:PatientComponent},
    {path:'viewcomplaints',component:ViewcomplaintsComponent}
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
