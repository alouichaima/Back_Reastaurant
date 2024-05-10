import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddchefRoutingModule } from './addchef-routing.module';
import { AddchefComponent } from './addchef.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AddchefComponent
  ],
  imports: [
    CommonModule,
    AddchefRoutingModule,
    FormsModule,
    ReactiveFormsModule

  ]
})
export class AddchefModule { }
