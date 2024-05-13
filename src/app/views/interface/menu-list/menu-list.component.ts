import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { CommandeService } from 'src/app/__services/commande.service';
import { MenuListeService } from 'src/app/__services/menu-liste.service';
import { MenuitemService } from 'src/app/__services/menuitem.service';
import { StorageService } from 'src/app/__services/storage.service';
import { MenuItem } from 'src/app/models/menu-item';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.css']
})
export class MenuListComponent {
   
  listCategories: any;
  listMenuItems: any;
  listChef: any;
  iduser: any;
  idmenuItem: any;
 

  menuItem: MenuItem = {
    id: null,
    name: null,
    description: null,
    price: null,
  };

  user: any;
  private roles: string[] = [];
  isLoggedIn = false;
  isNotLoggedIn = false;
  showAdminBoard = false;
  showClientBoard = false;
  showvisiteurBoard = true;
  showAddMenuItemForm: boolean = false;

  constructor(
    private menuItemService: MenuitemService,
   
  
    private servicecommande: CommandeService,
    private tokenStorageService: StorageService,
    private snackBar: MatSnackBar,
    private http: HttpClient,
    private router: Router
  ) { }
 
  getAllMenuItems() {
    this.menuItemService .getAllMenuItems().subscribe(res => this.menuItemService = res)

  }
 

  public passerCommande(idMenuItem: number): void {
    this.servicecommande.passerCommande(this.iduser, idMenuItem).subscribe(
      (data) => {
        console.log(this.iduser, idMenuItem);
        Swal.fire(
          'Félicitation!',
          'Commande passée avec succès',
          'success'
        );
      },
      (error) => {
        console.error('Une erreur s\'est produite lors de la commande :', error);
        Swal.fire(
          'Erreur!',
          'Une erreur s\'est produite lors de la commande. Veuillez réessayer plus tard.',
          'error'
        );
      }
    );
  }
  

  addtowishList(id: any) {
    console.log('Adding to wishlist:', { menuItemId: id, userId: this.iduser });

    const wishlistDto = {
      menuItem_id: id,
      userId: this.iduser
    };

    const accessToken = JSON.parse(localStorage.getItem('auth-user'))['accessToken'];
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + accessToken);

    this.http.post('http://localhost:9000/api/wishlist/avis', wishlistDto, { headers: headers })
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


