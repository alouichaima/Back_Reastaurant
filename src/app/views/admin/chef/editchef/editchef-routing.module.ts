import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditchefComponent } from './editchef.component';

const routes: Routes = [
    {path:'' , component:EditchefComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditchefRoutingModule { }
