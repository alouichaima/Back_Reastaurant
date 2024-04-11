import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetReservationComponent } from './get-reservation.component';

const routes: Routes = [
  {path:'', component:GetReservationComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GetReservationRoutingModule { }
 