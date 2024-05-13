import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplateLayoutComponent } from './layouts/template-layout/template-layout.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { CategoryComponent } from './layouts/admin-layout/category/category.component';
import { UpdateCategoryComponent } from './layouts/admin-layout/category/update-category/update-category.component';
import { AddCategoryComponent } from './layouts/admin-layout/category/add-category/add-category.component';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';
import { MatPaginatorModule } from '@angular/material/paginator';
import { NgbActiveModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule,FormGroup } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './views/interface/login/login.component';
import { RegistreComponent } from './views/interface/registre/registre.component';
import { ProfilLayoutsComponent } from './layouts/profil-layouts/profil-layouts.component';
import { PostReservationComponent } from './views/client/post-reservation/post-reservation.component';
import { AddMenuItemComponent } from './layouts/admin-layout/menu-item/add-item/add-item.component';
import { UpdateItemComponent } from './layouts/admin-layout/menu-item/update-item/update-item.component';
import { MenuItemComponent } from './layouts/admin-layout/menu-item/menu-item.component';
import { FoodmenuComponent } from './layouts/admin-layout/foodmenu/foodmenu.component';
import { GetwishlistComponent } from './views/client/getwishlist/getwishlist.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplateLayoutComponent,
    AdminLayoutComponent,
    ProfilLayoutsComponent,
    CategoryComponent,
    UpdateCategoryComponent,
    AddCategoryComponent,
    AddMenuItemComponent,
    UpdateItemComponent,
    MenuItemComponent,
    FoodmenuComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatPaginatorModule,
    FormsModule,
    NgbModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
