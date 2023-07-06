import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MedicationComponent } from './medication/medication.component';
import { LabtestsComponent } from './labtests/labtests.component';
import { ComplaintsComponent } from './complaints/complaints.component';
import { MenuOutlineComponent } from './menu-outline/menu-outline.component';
import { DetailsComponent } from './home/details/details.component';

const routes: Routes = [
  {path:'',component:MenuOutlineComponent,
   children:[
    {path:'home',component:HomeComponent},
    //{path: "details/:id",component: DetailsComponent},
    {path:'medication',component:MedicationComponent},
    {path:'labtests',component:LabtestsComponent},
    {path:'complaints',component:ComplaintsComponent}
   ] 
   }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
