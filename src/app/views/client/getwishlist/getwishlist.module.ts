import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GetwishlistRoutingModule } from './getwishlist-routing.module';
import { GetwishlistComponent } from './getwishlist.component';


@NgModule({
  declarations: [GetwishlistComponent], // Déclarez votre composant ici
  imports: [
    CommonModule,
    GetwishlistRoutingModule,

  ]
})
export class GetwishlistModule { }
