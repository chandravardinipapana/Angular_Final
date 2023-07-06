import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DetailsComponent } from './user/home/details/details.component';
import { MedicinedetailsComponent } from './user/medication/medicinedetails/medicinedetails.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:"user",loadChildren:() => import('./user/user.module').then(m => m.UserModule)},
  {path:"admin",loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)},
  {path: "details/:id",component: DetailsComponent},
  {path: "medicinedetails/:id",component:MedicinedetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
