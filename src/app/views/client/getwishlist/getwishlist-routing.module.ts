import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetwishlistComponent } from './getwishlist.component';

const routes: Routes = [
  {path:'', component:GetwishlistComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GetwishlistRoutingModule { }
