import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

import { CategoryService } from 'src/app/__services/category.service';
import { ChefService } from 'src/app/__services/chef.service';
import { MenuitemService } from 'src/app/__services/menuitem.service';
import { CommandeService } from 'src/app/__services/commande.service';
import { MenuItem } from 'src/app/models/menu-item';
<<<<<<< HEAD
import {MatSnackBar, MatSnackBarModule} from '@angular/material/snack-bar';
=======
import { StorageService } from 'src/app/__services/storage.service';
import Swal from 'sweetalert2';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { Chef } from 'src/app/models/chef';

>>>>>>> ed32f65dbefb0a511da665e34d970dea1a087537
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
<<<<<<< HEAD
  
=======

>>>>>>> ed32f65dbefb0a511da665e34d970dea1a087537
  listCategories:any;
  listMenuItems:any;
  listChef:any;
  iduser:any;
  idmenuItem:any;
  chef!:Chef;


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
<<<<<<< HEAD
    private servicechef:ChefService, private router:Router ,
    private snackBar: MatSnackBar ) { }
=======
    private servicechef:ChefService,
    private servicecommande:CommandeService,
    private tokenStorageService: StorageService,
    private snackBar: MatSnackBar,
    private http: HttpClient ) { }
>>>>>>> ed32f65dbefb0a511da665e34d970dea1a087537

  ngOnInit(): void {
    this.getAllMenuItems();
    this.getAllChef();
    this.chef={
      id:null,
      nomPrenom:null,
      description:null,
      image : null,
      facebook:null,
      instagram:null

    }

    this.isLoggedIn = !!this.tokenStorageService.getTokenn();
    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;
      this.showAdminBoard = this.roles.includes('ADMIN');
      this.showClientBoard = this.roles.includes('CLIENT');
      this.showvisiteurBoard = this.roles.includes('visiteur')
    }

    this.isNotLoggedIn  = !!this.tokenStorageService.getTokenn();

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.showvisiteurBoard = this.roles.includes('visiteur')

    }


    this.user=this.tokenStorageService.getUser();
      console.log(this.user)
      this.iduser = this.user.id;
      console.log(this.iduser)


  }

  getAllChef(){
    this.servicechef.getAllChef().subscribe(res => this.listChef = res)
  }

  getAllCategories(){
    this.categoryService.getCategories().subscribe(res => this.listCategories = res)
  }

  getAllMenuItems() {
    this.menuItemService.getAllMenuItems().subscribe(res => this.listMenuItems = res)

  }

<<<<<<< HEAD
  /*getAllChef() {
    this.chefservice.getAllChef().subscribe(res => this.listChef = res)
  }*/
  addToCart(id:any){
    this.menuItemService.addToCart(id).subscribe(res=>{
      this.snackBar.open("menuItem added to cart successfully","close",{duration:5000})
    })
  }
=======
>>>>>>> ed32f65dbefb0a511da665e34d970dea1a087537


  public passercommande (idmenuItem:any) : void {
          this.servicecommande.passercommande(this.iduser,idmenuItem).subscribe (
            (data) => {
              console.log(this.iduser,idmenuItem);
              console.log(Swal.fire(
                'Félicitation!',
                'Commande passée avec success',
                'success'
                    )     )   }
          )
  }

// http = inject(HttpClient);

addtowishList(id: any) {
  console.log('Adding to wishlist:', { menuItemId: id, userId: this.iduser });

  const wishlistDto = {
    menuItem_id: id,
    userId: this.iduser
  };

  const accessToken = JSON.parse(localStorage.getItem('auth-user'))['accessToken'];
  const headers = new HttpHeaders().set('Authorization', 'Bearer ' + accessToken);

  this.http.post('http://localhost:8022/api/wishlist/avis', wishlistDto, { headers: headers })
    .subscribe(
      (res: any) => {
        if (res && res.id != null) {
          this.snackBar.open('Menu Added to wishlist successfully', 'Close', { duration: 5000 });
        } else {
          this.snackBar.open('Already in wishlist', 'Error', { duration: 5000 });
        }
      },
      (error: any) => {
        this.snackBar.open('Something went wrong', 'Error', { duration: 5000 });
        console.error('Error adding to wishlist:', error);
      }
    );
}




}
