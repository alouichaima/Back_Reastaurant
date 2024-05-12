import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatNativeDateModule, ThemePalette } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { ReservationService } from 'src/app/__services/reservation.service';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-post-reservation',
  templateUrl: './post-reservation.component.html',
  styleUrls: ['./post-reservation.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    MatDatepickerModule,
    NgxMaterialTimepickerModule,
    MatButtonModule

  ],

})
export class PostReservationComponent  {
  colorControl = new FormControl('primary' as ThemePalette);


  // isSpinning:boolean=false;
  tableControl = new FormControl();

  TableType:string[]=[
    "Standard table",
    "Booth",
    "Communal Table",
    "Bar Table",
    "outdoor Table",
    "High-top Table",
    "Corner Table",
    "Family-Style Table",
    "Private Dining Table ",
    "Round Table"
  ];

  validateForm: FormGroup;

  constructor(private fb: FormBuilder, private service:ReservationService,private snackBar: MatSnackBar) {
    this.validateForm = this.fb.group({
      tableType: [null, Validators.required],
      dateTime: [null, Validators.required],
      time: [null, Validators.required],
      description: [null, Validators.required],
    });

  }


  postReservation(){
    console.log(this.validateForm.value);

    this.service.postReservation(this.validateForm.value).subscribe((res)=>{
      console.log(res);
      if (res.id != null){
// Show success message
    this.snackBar.open('Reservation posted successfully', 'Close', {
      duration: 3000, // Set the duration for the snackbar
      panelClass: 'success-snackbar' // Add a custom CSS class for styling
});

      }
    })
  }



}
