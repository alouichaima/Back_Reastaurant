import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryService } from 'src/app/__services/category.service';
import { ChefService } from 'src/app/__services/chef.service';
import { MenuitemService } from 'src/app/__services/menuitem.service';
import { CommandeService } from 'src/app/__services/commande.service';
import { MenuItem } from 'src/app/models/menu-item';
import { StorageService } from 'src/app/__services/storage.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  listCategories:any;
  listMenuItems:any;
  listchef:any;
  iduser:any;
  idmenuItem:any;
  menuItem: MenuItem = {
    id: null,
    name: null,
    description:null,
    price: null,
  };

  user:any;
  private roles : string[] = [];
  isLoggedIn = false;
  isNotLoggedIn =false;
  showAdminBoard = false;
  showClientBoard = false;
  showvisiteurBoard = true;
  showAddMenuItemForm: boolean = false;

  constructor(
    private menuItemService: MenuitemService,
    private categoryService:CategoryService,
    private servicechef:ChefService, 
    private servicecommande:CommandeService,
    private tokenStorageService: StorageService,
    private router:Router ) { }

  ngOnInit(): void {
    this.getAllMenuItems();
    this.getallc();

    this.isLoggedIn = !!this.tokenStorageService.getToken();
    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;

    }
    this.isNotLoggedIn  = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.showvisiteurBoard = this.roles.includes('visiteur')

    }

    this.user=this.tokenStorageService.getUser();
      console.log(this.user)
      this.iduser = this.user.id;
      console.log(this.iduser)

  }

  getAllCategories(){
    this.categoryService.getCategories().subscribe(res => this.listCategories = res)
  }
 
  getAllMenuItems() {
    this.menuItemService.getAllMenuItems().subscribe(res => this.listMenuItems = res)

  }

  getallc():void{
      this.servicechef.getAllChef().subscribe({next: (data) => { this.listchef= data;
        console.log(data);}, error: (c) => console.error(c) }) ;}

        public passercommande (idmenuItem:any) : void {
          this.servicecommande.passercommande(this.iduser,idmenuItem).subscribe (
            (data) => {
              console.log(this.iduser,idmenuItem);
              console.log(Swal.fire(
                'Félicitation!',
                'Commande passer avec success',
                'success'
                    )     )   }
          )
        }

}
