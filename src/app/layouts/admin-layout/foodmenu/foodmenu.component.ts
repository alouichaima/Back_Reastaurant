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
  listMenuItems:MenuItem[]=[];
  menuItems: MenuItem[] = [];

  constructor(private menuService: MenuService, private menuItemService:MenuitemService) { }

  ngOnInit(): void {
    this.getMenuWithCategories();
    this.fetchMenuItems();

  }

  getMenuWithCategories(): void {
    this.menuService.getMenuWithCategories().subscribe(categories => {
      this.categories = categories;
    });
  }
 

  fetchMenuItems(): void {
    this.menuItemService.fetchItemList().subscribe(
      (response: any) => {
        this.menuItems = response; // Assuming the response contains an array of MenuItem objects
      },
      (error: any) => {
        console.error('Error fetching menu items', error);
      }
    );
  }
}
