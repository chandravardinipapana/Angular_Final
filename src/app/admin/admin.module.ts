import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { MaterialModule } from '../materials/materials.module';
import { HttpClientModule,HttpClient } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PatientComponent } from './patient/patient.component';
import { ViewcomplaintsComponent } from './viewcomplaints/viewcomplaints.component';
import { PatientBoxComponent } from './patient/patient-box/patient-box.component';
import { PrescriptionComponent } from './patient/prescription/prescription.component';
import { ViewComponent } from './viewcomplaints/view/view.component';
import { DialogviewComponent } from './viewcomplaints/dialogview/dialogview.component';
import { ViewBoxComponent } from './viewcomplaints/view-box/view-box.component';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { LabdialogComponent } from './patient/labdialog/labdialog.component';
import { LabtestBoxComponent } from './patient/labtest-box/labtest-box.component';
import { LabtestComponent } from './patient/labtest/labtest.component';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http,'./assets/i18n1/', '.json');
}

@NgModule({
  declarations: [
     
  
    HomeComponent,
    HeaderComponent,
    PatientComponent,
    ViewcomplaintsComponent,
    PatientBoxComponent,
    PrescriptionComponent,
    ViewComponent,
    DialogviewComponent,
    ViewBoxComponent,
    FooterComponent,
    MenuComponent,
    LabdialogComponent,
    LabtestBoxComponent,
    LabtestComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
      }
  })
  ]
})
export class AdminModule { }
