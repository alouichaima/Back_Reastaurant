import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MescommandesComponent } from './mescommandes.component';

const routes: Routes = [
  {path:'', component:MescommandesComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MescommandesRoutingModule { }
