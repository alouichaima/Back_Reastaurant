import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditmonprofilRoutingModule } from './editmonprofil-routing.module';
import { EditmonprofilComponent } from './editmonprofil.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    EditmonprofilComponent
  ],
  imports: [
    CommonModule,
    EditmonprofilRoutingModule,
    FormsModule
  ]
})
export class EditmonprofilModule { }
