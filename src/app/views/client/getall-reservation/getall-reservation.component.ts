import { ReservationService } from 'src/app/__services/reservation.service';
import { Component } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTableModule } from '@angular/material/table';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-getall-reservation',
  templateUrl: './getall-reservation.component.html',
  styleUrls: ['./getall-reservation.component.css'],
  standalone: true,

  imports: [
    MatTableModule,
    MatProgressSpinnerModule,
    CommonModule


  ],
})

export class GetallReservationComponent {
  isSpinning : boolean=false;
  reservations:any;

  constructor(private service:ReservationService){}

  ngOnInit(){
    this.getReservationsByUser();
  }

  getReservationsByUser(){
    this.service.getReservationsByUser().subscribe((res)=>{
      console.log(res);
      this.reservations=res;
    })
  }

}
