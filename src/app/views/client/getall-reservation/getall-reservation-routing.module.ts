import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetallReservationComponent } from './getall-reservation.component';

const routes: Routes = [
  {path:'', component:GetallReservationComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GetallReservationRoutingModule { }
