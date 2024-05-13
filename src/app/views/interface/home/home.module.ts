import { HomeComponent } from './home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatSnackBarModule,
    MatIconModule
  ],
  providers: [
    // Autres services
    MatSnackBar, // Ajoutez MatSnackBar aux fournisseurs (providers)
  ]
})
export class HomeModule { }
