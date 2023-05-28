import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AdmindashComponent } from './module/admin/admindash/admindash.component';
import { DriverdashComponent } from './module/driver/driverdash/driverdash.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './module/admin/admin.component';
import { DriverComponent } from './module/driver/driver.component';
import { RegisterComponent } from './register/register.component';
import { AvailableCabComponent } from './available-cab/available-cab.component';
import { AddcarComponent } from './module/admin/addcar/addcar.component';
import { RegisteredCarComponent } from './module/admin/registered-car/registered-car.component';
import { ManagecarComponent } from './module/admin/managecar/managecar.component';
import { BookingformComponent } from './bookingform/bookingform.component';
import { AutosuggestComponent } from './autosuggest/autosuggest.component';
import { RouteComponent } from './module/admin/route/route.component';
import { AdddriverComponent } from './module/admin/adddriver/adddriver.component';
import { PopComponent } from './pop/pop.component';
import { Pop2Component } from './pop2/pop2.component';

const routes: Routes = [
  { path: '', component:   LoginComponent},
  { path: 'home', component: HomeComponent },
  { path: 'bookingform', component: BookingformComponent },
  { path: 'pop', component: PopComponent },
  { path: 'pop2', component: Pop2Component },

  {path:'adddriver', component: AdddriverComponent},
  { path: 'reg', component: RegisterComponent },
  { path: 'log', component: LoginComponent },
  { path: 'availcab', component: AvailableCabComponent },
  {path: 'auto', component:AutosuggestComponent},
  {path:'route',component:RouteComponent},
  { path: 'admin', component: AdminComponent, loadChildren: () => import('./module/admin/admin.module').then(x => x.AdminModule) },
  { path: 'driver', component: DriverComponent, loadChildren: () => import('./module/driver/driver.module').then(x => x.DriverModule) },













  // {path:'addcar', component:AddcarComponent},
  // {path: 'regiscar', component:RegisteredCarComponent},
  // {path:'manage',component:ManagecarComponent},
  // { path: 'admin', component: AdminComponent, loadChildren:() =>import('./admin/admin.module').then(x=>x.AdminModule) },
  // { path: 'driver', component: AdminComponent, loadChildren:() =>import('./driver/driver.module').then(x=>x.DriverModule) },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
