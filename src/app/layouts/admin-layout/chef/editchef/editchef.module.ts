import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditchefRoutingModule } from './editchef-routing.module';
import { EditchefComponent } from './editchef.component';


@NgModule({
  declarations: [
    EditchefComponent
  ],
  imports: [
    CommonModule,
    EditchefRoutingModule
  ]
})
export class EditchefModule { }
