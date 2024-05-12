import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditchefRoutingModule } from './editchef-routing.module';
import { EditchefComponent } from './editchef.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    EditchefComponent
  ],
  imports: [
    CommonModule,
    EditchefRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class EditchefModule { }
