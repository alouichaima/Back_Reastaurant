import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddchefRoutingModule } from './addchef-routing.module';
import { AddchefComponent } from './addchef.component';


@NgModule({
  declarations: [
    AddchefComponent
  ],
  imports: [
    CommonModule,
    AddchefRoutingModule
  ]
})
export class AddchefModule { }
