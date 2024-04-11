import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetcategorieComponent } from './getcategorie.component';

const routes: Routes = [
  {path:'',component:GetcategorieComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GetcategorieRoutingModule { }
