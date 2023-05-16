import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdmindashComponent } from './admindash/admindash.component';
import { AddcarComponent } from './addcar/addcar.component';
import { EditcarComponent } from './editcar/editcar.component';
import { AdminComponent } from './admin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisteredCarComponent } from './registered-car/registered-car.component';
import { ManagecarComponent } from './managecar/managecar.component';
import { RouteComponent } from './route/route.component';
import { AdddriverComponent } from './adddriver/adddriver.component';


@NgModule({
  declarations: [
    AdmindashComponent,
    AddcarComponent,
    EditcarComponent,
    AdminComponent,
    RegisteredCarComponent,
    ManagecarComponent,
    RouteComponent,
    AdddriverComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
