import { Component } from '@angular/core';
import { Menu } from 'src/app/models/menu';
import { Category } from '../category/category';
import { MenuService } from 'src/app/__services/menu.service';
import { MenuItem } from 'src/app/models/menu-item';
import { MenuitemService } from 'src/app/__services/menuitem.service';

@Component({
  selector: 'app-foodmenu',
  templateUrl: './foodmenu.component.html',
  styleUrls: ['./foodmenu.component.css']
})
export class FoodmenuComponent {
  categories: Category[] = [];
  listMenuItems:any;

  constructor(private menuService: MenuService, private menuItemService:MenuitemService) { }

  ngOnInit(): void {
    this.getMenuWithCategories();
  }

  getMenuWithCategories(): void {
    this.menuService.getMenuWithCategories().subscribe(categories => {
      this.categories = categories;
    });
  }
  getAllMenuItems(): void {
    this.menuItemService.getAllMenuItems().subscribe(menuItems => {
      this.listMenuItems = menuItems;
    });
  }

  
}
