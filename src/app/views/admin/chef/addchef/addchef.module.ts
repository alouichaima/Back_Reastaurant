import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddchefRoutingModule } from './addchef-routing.module';
import { AddchefComponent } from './addchef.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AddchefComponent
  ],
  imports: [
    CommonModule,
    AddchefRoutingModule,
    FormsModule

  ]
})
export class AddchefModule { }
