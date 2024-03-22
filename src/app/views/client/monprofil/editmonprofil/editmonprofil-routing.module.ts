import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditmonprofilComponent } from './editmonprofil.component';

const routes: Routes = [
  {path:'',component:EditmonprofilComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditmonprofilRoutingModule { }
