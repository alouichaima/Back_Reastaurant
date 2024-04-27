import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddchefComponent } from './addchef.component';

const routes: Routes = [
  {path:'' , component:AddchefComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddchefRoutingModule { }
