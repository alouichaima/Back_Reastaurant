import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TemplateLayoutComponent } from './layouts/template-layout/template-layout.component';
import { CategoryComponent } from './layouts/admin-layout/category/category.component';
import { AddCategoryComponent } from './layouts/admin-layout/category/add-category/add-category.component';
import { UpdateCategoryComponent } from './layouts/admin-layout/category/update-category/update-category.component';
import { ProfilLayoutsComponent } from './layouts/profil-layouts/profil-layouts.component';

const routes: Routes = [
  {path:'',component:TemplateLayoutComponent,children:[
    {path:'',loadChildren:()=>import('./views/interface/home/home.module').then(m=>m.HomeModule)},
    {path:'categorieC',loadChildren:()=>import('./views/interface/get_categorie/getcategorie/getcategorie.module').then(m=>m.GetcategorieModule)},
    



  ]},
  {path:'login',loadChildren:()=>import('./views/interface/login/login.module').then(m=>m.LoginModule)},
      {path:'registre',loadChildren:()=>import('./views/interface/registre/registre.module').then(m=>m.RegistreModule)},


  {path:'admin',component:AdminLayoutComponent,children:[
    {path:'',loadChildren:()=>import('./views/admin/dashboard/dashboard.module').then(m=>m.DashboardModule)},
    {path:'dashboard',loadChildren:()=>import('./views/admin/dashboard/dashboard.module').then(m=>m.DashboardModule)},
    {path:'categories',component:CategoryComponent},
    {path:'addCategory',component:AddCategoryComponent},
    { path: 'update-categorie/:id', component: UpdateCategoryComponent },
    {path:'reservation',loadChildren:()=>import('./views/admin/reservation/get-reservation/get-reservation.module').then(m=>m.GetReservationModule)},


  ]},

  {path:'client',component:ProfilLayoutsComponent,children:[
    {path:'reservation',loadChildren:()=>import('./views/client/post-reservation/post-reservation.module').then(m=>m.PostReservationModule)},
    {path:'reservationall',loadChildren:()=>import('./views/client/getall-reservation/getall-reservation.module').then(m=>m.GetallReservationModule)},





  ]}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
