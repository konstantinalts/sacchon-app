import { PatientModule } from './patient/patient.module';
import { MedidataComponent } from './patient/medidata/medidata.component';
import { AuthModule } from './auth/auth.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http'
import { HomeModule } from './home/home.module';
import { AuthRoutingModule } from './auth/auth-routing.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HomeModule,
    AuthRoutingModule,
    AuthModule,
    PatientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
