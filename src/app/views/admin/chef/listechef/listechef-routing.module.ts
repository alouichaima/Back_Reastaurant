import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListechefComponent } from './listechef.component';

const routes: Routes = [
  {path:'' , component:ListechefComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListechefRoutingModule { }
