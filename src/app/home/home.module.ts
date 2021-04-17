import { RouterModule } from '@angular/router';
import { AuthModule } from './../auth/auth.module';
import { AuthRoutingModule } from './../auth/auth-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';






@NgModule({
  declarations: [
    HomePageComponent,
    
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    AuthModule,
    RouterModule
  ],
  exports: [
    HomePageComponent
  ]
})
export class HomeModule { }
