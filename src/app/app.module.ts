import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgSelectModule } from '@ng-select/ng-select';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import {HttpClientModule} from '@angular/common/http';
import { AdminModule } from './module/admin/admin.module';
import { DriverModule } from './module/driver/driver.module';
import { RegisterComponent } from './register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AvailableCabComponent } from './available-cab/available-cab.component';
import { BookingformComponent } from './bookingform/bookingform.component';
import { AutosuggestComponent } from './autosuggest/autosuggest.component';
import { PopComponent } from './pop/pop.component';
import { Pop2Component } from './pop2/pop2.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// import { trigger, state, style, animate, transition } from '@angular/animations';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    AvailableCabComponent,
    BookingformComponent,
    AutosuggestComponent,
    PopComponent,
    Pop2Component,
    

    
  

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AdminModule,
    DriverModule,
    NgSelectModule,
    BrowserAnimationsModule

    
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
