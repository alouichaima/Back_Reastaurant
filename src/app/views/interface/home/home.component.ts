import { Component } from '@angular/core';
import { CategoryService } from 'src/app/__services/category.service';
import { ChefService } from 'src/app/__services/chef.service';
import { MenuitemService } from 'src/app/__services/menuitem.service';
import { MenuItem } from 'src/app/models/menu-item';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  listCategories:any;
  listMenuItems:any;
  listChef : any;
  // listMenuItems: MenuItem[] = [];
  menuItem: MenuItem = {
    id: null,
    name: null,
    description:null,
    price: null,
  };

  showAddMenuItemForm: boolean = false;

  constructor(
    private menuItemService: MenuitemService,
    private categoryService:CategoryService,
    private chefservice:ChefService
  ) { }

  ngOnInit(): void {
    this.getAllMenuItems();
  }
  getAllCategories(){
    this.categoryService.getCategories().subscribe(res => this.listCategories = res)
  }
 
  getAllMenuItems() {
    this.menuItemService.getAllMenuItems().subscribe(res => this.listMenuItems = res)

  }

  /*getAllChef() {
    this.chefservice.getAllChef().subscribe(res => this.listChef = res)
  }*/


  
  getAllChef():void{

    this.chefservice.getAllChef().subscribe({next: (data) => {

    this.listChef= data;

    console.log(data);

    },

    error: (c) => console.error(c)

    });

      }

  




}
