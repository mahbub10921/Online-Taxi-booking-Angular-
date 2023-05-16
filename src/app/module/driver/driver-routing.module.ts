import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DriverdashComponent } from './driverdash/driverdash.component';

const routes: Routes = [
  { path: '', component:  DriverdashComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DriverRoutingModule { }
