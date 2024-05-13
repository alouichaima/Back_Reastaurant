import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuListRoutingModule } from './menu-list-routing.module';
import {MatSnackBar, MatSnackBarModule} from '@angular/material/snack-bar';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MenuListRoutingModule,
    MatSnackBarModule,
    
  ],
  
})
export class MenuListModule { }
