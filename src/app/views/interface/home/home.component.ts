import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { CategoryService } from 'src/app/__services/category.service';
import { ChefService } from 'src/app/__services/chef.service';
import { MenuitemService } from 'src/app/__services/menuitem.service';
import { MenuItem } from 'src/app/models/menu-item';
import {MatSnackBar, MatSnackBarModule} from '@angular/material/snack-bar';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  
  listCategories:any;
  listMenuItems:any;
  list:any;  // listMenuItems: MenuItem[] = [];
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
    private servicechef:ChefService, private router:Router ,
    private snackBar: MatSnackBar ) { }

  ngOnInit(): void {
    this.getAllMenuItems();
    this.getallc();

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
  addToCart(id:any){
    this.menuItemService.addToCart(id).subscribe(res=>{
      this.snackBar.open("menuItem added to cart successfully","close",{duration:5000})
    })
  }


  
  

  

  getallc():void{

    this.servicechef.getAllChef().subscribe({next: (data) => {

    this.list= data;

    console.log(data);

    },

    error: (c) => console.error(c)

    });

      }

  




}
