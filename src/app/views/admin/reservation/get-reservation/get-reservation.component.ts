import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { AdminService } from 'src/app/__services/admin.service';

@Component({
  selector: 'app-get-reservation',
  templateUrl: './get-reservation.component.html',
  styleUrls: ['./get-reservation.component.css'],
  
  standalone: true,
  imports: [
    CommonModule,
    MatProgressSpinnerModule,
    MatTableModule,
    MatSnackBarModule

  ],
})

export class GetReservationComponent {

  isSpinning : boolean=false;
  reservations:any;

  constructor(private service:AdminService,private snackBar: MatSnackBar
    ){}

  ngOnInit(){
    this.getReservationsByUser();
  }

  getReservationsByUser(){
    this.service.getReservations().subscribe((res)=>{
      console.log(res);
      this.reservations=res;
    })
  }
  changeReservationStatus(reservationId:number, status:string){
    console.log(reservationId);
    console.log(status);
    this.service.changeReservationStatus(reservationId,status).subscribe((res)=>{

      console.log(res);
      if(res.id != null){
        this.getReservationsByUser();
        this.snackBar.open('Reservation status changed successfully', 'Close', {
          duration: 3000,
          panelClass: 'success-snackbar' // Add a custom CSS class for styling
    });


      }
      else{
        this.getReservationsByUser();
        const isErrorCondition: boolean =false
          this.snackBar.open('Something went wrong', 'Close', {
            duration: 3000,
            panelClass: isErrorCondition ? 'success-snackbar' : 'error-snackbar' // Use a condition to choose the class
          });

      }
    })

  }


}
