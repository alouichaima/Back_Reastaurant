import { UserCRUDService } from './../../__services/user-crud.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/__services/auth.service';
import { StorageService } from 'src/app/__services/storage.service';

@Component({
  selector: 'app-profil-layouts',
  templateUrl: './profil-layouts.component.html',
  styleUrls: ['./profil-layouts.component.css']
})
export class ProfilLayoutsComponent {
  isLoggedIn = false;
  showAdminBoard = false;
  showModeratorBoard = false;
  username?: string;
  image: any;
  messageSuccess: any;
  messageError: any;
  iduser: any;
  OneUser:any=[]



  constructor(
    private storageService: StorageService,
    private route: Router,
    private UserCRUDService:UserCRUDService,

  ) {}
  ngOnInit(): void {
    const user = this.storageService.getUser();
    if (user) {
      this.isLoggedIn = true;
      this.iduser = user.id;
      this.username = user.username;
      this.image = user.photo;
      this.UserCRUDService.GetOneUser(this.iduser).subscribe(data => this.OneUser = data);
    }
  }


  selectImage(event: any) {
    if (event.target.files.length > 0) {
      const photo = event.target.files[0];
      this.image = photo;
    }
  }

  updatephoto() {
    if (!this.iduser) {
      console.error("User ID is undefined.");
      return;
    }

    let body = new FormData();
    body.append('file', this.image);

    this.UserCRUDService.ModifierPhoto(this.iduser, body).subscribe(
      response => {
        this.ngOnInit();
        this.messageSuccess = response;
      },
      (err: HttpErrorResponse) => {
        this.messageError = err;
      }
    );
  }


  logout(): void {
    this.storageService.signOut();
    this.route.navigate(['/login']);
  }

}
