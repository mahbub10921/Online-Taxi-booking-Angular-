import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddcarComponent } from './addcar/addcar.component';
import { AdmindashComponent } from './admindash/admindash.component';
import { ManagecarComponent } from './managecar/managecar.component';
import { RegisteredCarComponent } from './registered-car/registered-car.component';
import { EditcarComponent } from './editcar/editcar.component';

const routes: Routes = [
  { path: '', component:  AdmindashComponent },
  { path: 'managecar', component: ManagecarComponent },
  { path: 'regiscar', component: RegisteredCarComponent },
  {path:'addcar', component: AddcarComponent},
  { path: 'post/:postId/edit', component: EditcarComponent },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
