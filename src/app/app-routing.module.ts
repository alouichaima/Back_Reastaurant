import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TemplateLayoutComponent } from './layouts/template-layout/template-layout.component';
import { CategoryComponent } from './layouts/admin-layout/category/category.component';
import { AddCategoryComponent } from './layouts/admin-layout/category/add-category/add-category.component';
import { UpdateCategoryComponent } from './layouts/admin-layout/category/update-category/update-category.component';
import { ProfilLayoutsComponent } from './layouts/profil-layouts/profil-layouts.component';
import { MenuItemComponent } from './layouts/admin-layout/menu-item/menu-item.component';
import { UpdateItemComponent } from './layouts/admin-layout/menu-item/update-item/update-item.component';
import { AddMenuItemComponent } from './layouts/admin-layout/menu-item/add-item/add-item.component';
import { FoodmenuComponent } from './layouts/admin-layout/foodmenu/foodmenu.component';

const routes: Routes = [
  {path:'',component:TemplateLayoutComponent,children:[
  {path:'',loadChildren:()=>import('./views/interface/home/home.module').then(m=>m.HomeModule)},
    {path:'categorieC',loadChildren:()=>import('./views/interface/get_categorie/getcategorie/getcategorie.module').then(m=>m.GetcategorieModule)},
  
    {path:'menuList',loadChildren:()=>import('./views/interface/menu-list/menu-list.module').then(m=>m.MenuListModule)},
  ]},
  {path:'login',loadChildren:()=>import('./views/interface/login/login.module').then(m=>m.LoginModule)},
  {path:'registre',loadChildren:()=>import('./views/interface/registre/registre.module').then(m=>m.RegistreModule)},



    {path:'admin',component:AdminLayoutComponent,children:[
    {path:'',loadChildren:()=>import('./views/admin/dashboard/dashboard.module').then(m=>m.DashboardModule)},
    {path:'dashboard',loadChildren:()=>import('./views/admin/dashboard/dashboard.module').then(m=>m.DashboardModule)},
    {path:'categories',component:CategoryComponent},
    {path:'addCategory',component:AddCategoryComponent},
    {path: 'update-categorie/:id', component: UpdateCategoryComponent },
    {path:'reservation',loadChildren:()=>import('./views/admin/reservation/get-reservation/get-reservation.module').then(m=>m.GetReservationModule)},
    {path:'commande',loadChildren:()=>import('./views/admin/commande/commande.module').then(m=>m.CommandeModule)},
    {path:'menu-item',component:MenuItemComponent},

    {path:'addItem',component:AddMenuItemComponent},
    {path:'update-item/:id',component:UpdateItemComponent},
    {path:'categories',component:CategoryComponent},
    {path:'menu',component: FoodmenuComponent },
    //{path:'addCategory',component:AddCategoryComponent},
    //{path:'update-categorie/:id', component: UpdateCategoryComponent },
    {path:'listechef', loadChildren:()=>import('./views/admin/chef/listechef/listechef.module').then(m=>m.ListechefModule)},
    {path:'editchef', loadChildren:()=>import('./views/admin/chef/editchef/editchef.module').then(m=>m.EditchefModule)},
    {path:'addchef', loadChildren:()=>import('./views/admin/chef/addchef/addchef.module').then(m=>m.AddchefModule)},




  ]},


  {path:'client',component:ProfilLayoutsComponent,children:[
  {path:'reservation',loadChildren:()=>import('./views/client/post-reservation/post-reservation.module').then(m=>m.PostReservationModule)},
    {path:'reservation',loadChildren:()=>import('./views/client/post-reservation/post-reservation.module').then(m=>m.PostReservationModule)},
    {path:'reservationall',loadChildren:()=>import('./views/client/getall-reservation/getall-reservation.module').then(m=>m.GetallReservationModule)},
    {path:'reservation',loadChildren:()=>import('./views/client/post-reservation/post-reservation.module').then(m=>m.PostReservationModule)},
    {path:'monprofil', loadChildren:()=>import('./views/client/monprofil/monprofil/monprofil.module').then(m=>m.MonprofilModule)},
    {path:'editprofil', loadChildren:()=>import('./views/client/monprofil/editmonprofil/editmonprofil.module').then(m=>m.EditmonprofilModule)},
    {path:'getwishlist', loadChildren:()=>import('./views/client/getwishlist/getwishlist.module').then(m=>m.GetwishlistModule)},
    {path:'mescommandes', loadChildren:()=>import('./views/client/monprofil/mescommandes/mescommandes.module').then(m=>m.MescommandesModule)},

  ]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
