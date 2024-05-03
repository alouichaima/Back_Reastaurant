import { UserService } from './../../../__services/user.service';
import { UserCRUDService } from 'src/app/__services/user-crud.service';
import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from 'src/app/__services/category.service';
import { ChefService } from 'src/app/__services/chef.service';
import { MenuitemService } from 'src/app/__services/menuitem.service';
import { StorageService } from 'src/app/__services/storage.service';
import { MenuItem } from 'src/app/models/menu-item';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CommandeService } from 'src/app/__services/commande.service';
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


menuItemId:number;//=this.route.snapshot.params["menuItemId"];
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
    private UserService :UserService,
    private route:ActivatedRoute,
    private snackBar: MatSnackBar,
    private servicecommande:CommandeService,
    private tokenStorageService: StorageService,
    private router:Router
  ) { }


  ngOnInit(): void {
    this.menuItemId=this.route.snapshot.params["menuItemId"];
    console.log(this.menuItem);


    this.getAllMenuItems();
    this.getallc();

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

  getAllCategories(){
    this.categoryService.getCategories().subscribe(res => this.listCategories = res)
  }

  getAllMenuItems() {
    this.menuItemService.getAllMenuItems().subscribe(res => this.listMenuItems = res)

  }

  /*getAllChef() {
    this.chefservice.getAllChef().subscribe(res => this.listChef = res)
  }*/
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






  getallc():void{
      this.servicechef.getAllChef().subscribe({next: (data) => { this.listchef= data;
        console.log(data);}, error: (c) => console.error(c) }) ;}

    this.servicechef.getAllChef().subscribe({next: (data) => {

    this.list= data;

    console.log(data);

    },

    error: (c) => console.error(c)

    });




http = inject(HttpClient);

      addtowishList(id: any) {
        console.log(id);

        const wishlistDto = {
          menuItemId: id,
          userId: StorageService.getUserId()
        };
        console.log(wishlistDto);

        // Récupérer le jeton d'authentification depuis le stockage local
        const accessToken = JSON.parse(localStorage.getItem('auth-user'))['accessToken'];


        // Créer les en-têtes HTTP avec le jeton d'authentification
        let headers = new HttpHeaders().set('Authorization', 'bearer ' + accessToken);
        console.log(headers, wishlistDto);

        this.http.post('http://localhost:8022/api/wishlist/avis', wishlistDto, {
          headers: headers
        }).subscribe(
          (res: any) => {
            // Vérifier si la réponse contient un identifiant non nul
            if (res && res.id != null) {
              // Si l'élément a été ajouté avec succès à la liste de souhaits
              this.snackBar.open('Menu Added to wishlist successfully', 'Close', {
                duration: 5000
              });
            } else {
              // Si l'élément est déjà dans la liste de souhaits
              this.snackBar.open('Already in wishlist', 'Error', {
                duration: 5000
              });
            }
          },
          (error: any) => {
            // En cas d'erreur lors de l'ajout à la liste de souhaits
            this.snackBar.open('Something went wrong', 'Error', {
              duration: 5000
            });
            console.error(error);
          }
        );
      }

