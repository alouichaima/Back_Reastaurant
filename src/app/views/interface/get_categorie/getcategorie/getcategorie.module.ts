import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GetcategorieRoutingModule } from './getcategorie-routing.module';
import { GetcategorieComponent } from './getcategorie.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [GetcategorieComponent],
  imports: [
    CommonModule,
    GetcategorieRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ]
})
export class GetcategorieModule { }
