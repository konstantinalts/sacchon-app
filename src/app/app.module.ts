import { PatientService } from './patient/patient/patient.service';
import { ReactiveFormsModule } from '@angular/forms';
import { PatientModule } from './patient/patient.module';
import { AuthModule } from './auth/auth.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http'
import { HomeModule } from './home/home.module';
import { AuthRoutingModule } from './auth/auth-routing.module';
import { DoctorModule } from './doctor/doctor.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HomeModule,
    AuthRoutingModule,
    AuthModule,
    PatientModule,
    ReactiveFormsModule,
    DoctorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
