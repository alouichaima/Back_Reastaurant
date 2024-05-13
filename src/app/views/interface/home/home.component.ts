import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryService } from 'src/app/__services/category.service';
import { ChefService } from 'src/app/__services/chef.service';
import { MenuitemService } from 'src/app/__services/menuitem.service';
import { CommandeService } from 'src/app/__services/commande.service';
import { MenuItem } from 'src/app/models/menu-item';
import { StorageService } from 'src/app/__services/storage.service';
import Swal from 'sweetalert2';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { Chef } from 'src/app/models/chef';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

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
  showAddMenuItemForm: boolean = false;

  constructor(
    private menuItemService: MenuitemService,
    private categoryService:CategoryService,
    private servicechef:ChefService,
    private servicecommande:CommandeService,
    private tokenStorageService: StorageService,
    private snackBar: MatSnackBar,
    private http: HttpClient ) { }

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
    const user = this.tokenStorageService.getUser();
    if (user && user.roles.includes('CLIENT')) {
      this.showClientBoard = true;
    }

    // this.isLoggedIn = !!this.tokenStorageService.getTokenn();
    // if (this.isLoggedIn) {
    //   const user = this.tokenStorageService.getUser();
    //   this.roles = user.roles;
    //   this.showAdminBoard = this.roles.includes('ADMIN');
    //   this.showClientBoard = this.roles.includes('CLIENT');
    // }

    this.isNotLoggedIn  = !!this.tokenStorageService.getTokenn();

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();

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
