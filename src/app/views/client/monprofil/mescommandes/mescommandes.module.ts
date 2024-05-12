import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MescommandesRoutingModule } from './mescommandes-routing.module';
import { MescommandesComponent } from './mescommandes.component';


@NgModule({
  declarations: [
    MescommandesComponent
  ],
  imports: [
    CommonModule,
    MescommandesRoutingModule
  ]
})
export class MescommandesModule { }
