import { PostReservationComponent } from './post-reservation.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostReservationRoutingModule } from './post-reservation-routing.module';
import { MatSnackBarModule } from '@angular/material/snack-bar';



@NgModule({
  declarations: [
    // PostReservationComponent,
  ],
  imports: [
    CommonModule,
    PostReservationRoutingModule,
    MatSnackBarModule
  ],

})
export class PostReservationModule { }
