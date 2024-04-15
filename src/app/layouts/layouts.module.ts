import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuItemComponent } from './admin-layout/menu-item/menu-item.component';
import { AddMenuItemComponent } from './admin-layout/menu-item/add-item/add-item.component';
import { ChefComponent } from './admin-layout/chef/chef.component';
import { ListechefComponent } from './admin-layout/chef/listechef/listechef.component';




@NgModule({
  declarations: [
    
    
    
  
    ChefComponent,
                         ListechefComponent
  ],
  imports: [
    CommonModule
  ]
})
export class LayoutsModule { }
