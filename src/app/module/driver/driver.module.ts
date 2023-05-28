import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DriverRoutingModule } from './driver-routing.module';
import { DriverdashComponent } from './driverdash/driverdash.component';
import { DriverComponent } from './driver.component';
import { trigger, state, style, animate, transition } from '@angular/animations';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [
    DriverdashComponent,
    DriverComponent
  ],
  imports: [
    CommonModule,
    DriverRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    // BrowserAnimationsModule
  ]
})
export class DriverModule { }
