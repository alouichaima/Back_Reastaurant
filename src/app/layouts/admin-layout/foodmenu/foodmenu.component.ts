import { Component } from '@angular/core';
import { Menu } from 'src/app/models/menu';
import { Category } from '../category/category';
import { MenuService } from 'src/app/__services/menu.service';

@Component({
  selector: 'app-foodmenu',
  templateUrl: './foodmenu.component.html',
  styleUrls: ['./foodmenu.component.css']
})
export class FoodmenuComponent {
  menus: Menu[] = [];
    categories: Category[] = [];
    constructor(private menuService: MenuService) { }
    ngOnInit(): void {
      this.getAllMenus();
      this.getCategories();
    }
    getAllMenus() {
      this.menuService.getAllMenus().subscribe(
        (response: any) => { 
          this.menus = response;
        },
        error => {
          console.log('Error fetching menus: ', error);
        }
      );
    }
    
    getCategories() {
      this.menuService.getCategories().subscribe(
        (response: Category[]) => {
          this.categories = response;
        },
        error => {
          console.log('Error fetching categories: ', error);
        }
      );
    }
    
}
