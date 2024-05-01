import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListechefRoutingModule } from './listechef-routing.module';
import { ListechefComponent } from './listechef.component';


@NgModule({
  declarations: [
    ListechefComponent
  ],
  imports: [
    CommonModule,
    ListechefRoutingModule
  ]
})
export class ListechefModule { }
