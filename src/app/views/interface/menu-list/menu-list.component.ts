import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MenuListeService } from 'src/app/__services/menu-liste.service';

@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.css']
})
export class MenuListComponent {
   listMenuItems:any;
  constructor(
    private MenuListeService:MenuListeService,
   
    
    
      private snackBar: MatSnackBar 

  ){}
  getAllMenuItems() {
    this.MenuListeService .getAllMenuItems().subscribe(res => this.MenuListeService = res)

  }

}
