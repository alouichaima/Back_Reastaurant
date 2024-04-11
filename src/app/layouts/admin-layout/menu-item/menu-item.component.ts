import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MenuitemService } from 'src/app/__services/menuitem.service';
import { MenuItem } from 'src/app/models/menu-item';
import Swal from 'sweetalert2';
import { AddMenuItemComponent } from './add-item/add-item.component';
import { CategoryService } from 'src/app/__services/category.service';
import { Category } from '../category/category';


@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css']
})
export class MenuItemComponent {
  listCategories:any;
  listMenuItems:any;
  // listMenuItems: MenuItem[] = [];
  menuItem: MenuItem = {
    idItem: null,
    name: null,
    description:null,
    price: null,
  };

  showAddMenuItemForm: boolean = false;

  constructor(
    private menuItemService: MenuitemService,
    private dialog: MatDialog,
    private modalService: NgbModal,
    private categoryService:CategoryService
  ) { }

  ngOnInit(): void {
    this.getAllMenuItems();
  }
  getAllCategories(){
    this.categoryService.getAllCategories().subscribe(res => this.listCategories = res)
  }
  // getAllMenuItems(): void {
  //   this.menuItemService.getMenuItems().subscribe(res => this.listMenuItems = res)

  // }
  getAllMenuItems() {
    this.menuItemService.getAllMenuItems().subscribe(res => this.listMenuItems = res)

  }

  addMenuItem(menuItem: any): void {
    this.menuItemService.addItem(menuItem).subscribe(() => {
      this.getAllMenuItems();
    });
  }

  deleteMenuItemById(id: any): void {
    this.menuItemService.deleteItemById(id).subscribe(() => {
      this.getAllMenuItems();
    });
    Swal.fire({
      title: "Done!",
      text: "Menu item deleted successfully!",
      icon: "success"
    });
  }

  openAddMenuItemForm(): void {
    const dialogRef = this.dialog.open(AddMenuItemComponent, {
      width: '400px', // Adjust the width as needed
    });

    dialogRef.afterClosed().subscribe(result => {
      // Handle the result if needed
    });
  }

  closeAddMenuItemForm(): void {
    this.showAddMenuItemForm = false;
  }


}
