import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MonprofilRoutingModule } from './monprofil-routing.module';
import { MonprofilComponent } from './monprofil.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    MonprofilComponent
  ],
  imports: [
    CommonModule,
    MonprofilRoutingModule,
    FormsModule
  ]
})
export class MonprofilModule { }
