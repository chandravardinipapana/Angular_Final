import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MedicationComponent } from './medication/medication.component';
import { LabtestsComponent } from './labtests/labtests.component';
import { ComplaintsComponent } from './complaints/complaints.component';
import { MaterialModule } from '../materials/materials.module';
import { MenuOutlineComponent } from './menu-outline/menu-outline.component';
import { HomeBoxComponent } from './home/home-box/home-box.component';
import { MedicationBoxComponent } from './medication/medication-box/medication-box.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { CityPipe } from './pipes/city.pipe';
import { StatePipe } from './pipes/state.pipe';
import { AppointmentComponent } from './appointment/appointment.component';
import { AppointdialogComponent } from './medication/appointdialog/appointdialog.component';
import { ViewappointComponent } from './medication/viewappoint/viewappoint.component';
import { ViewappointBoxComponent } from './medication/viewappoint-box/viewappoint-box.component';
import { DetailsComponent } from './home/details/details.component';
import { PageComponent } from './home/page/page.component';
import { LabsComponent } from './labtests/labs/labs.component';
import { TestsComponent } from './labtests/tests/tests.component';
import { HttpClientModule,HttpClient } from '@angular/common/http';
 import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { BookTestComponent } from './labtests/tests/book-test/book-test.component';
import { LabtestsPipe } from './pipes/labtests.pipe';
import { SpecilizationPipe } from './pipes/specilization.pipe';
import { MedicinedetailsComponent } from './medication/medicinedetails/medicinedetails.component';
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http,'./assets/i18n/', '.json');
}


@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    MedicationComponent,
    LabtestsComponent,
    ComplaintsComponent,
    MenuOutlineComponent,
    HomeBoxComponent,
    MedicationBoxComponent,
    AppointmentComponent,
    CityPipe,
    StatePipe,
    AppointdialogComponent,
    ViewappointComponent,
    ViewappointBoxComponent,
    DetailsComponent,
    PageComponent,
    LabsComponent,
    TestsComponent,
    BookTestComponent,
    LabtestsPipe,
    SpecilizationPipe,
    MedicinedetailsComponent,
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    MatDialogModule,
    FormsModule,
    HttpClientModule,
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
export class UserModule { }
