import { Component } from '@angular/core';
import { AuthService } from 'src/app/__services/auth.service';
import { StorageService } from 'src/app/__services/storage.service';

@Component({
  selector: 'app-profil-layouts',
  templateUrl: './profil-layouts.component.html',
  styleUrls: ['./profil-layouts.component.css']
})
export class ProfilLayoutsComponent {
  private roles: string[] = [];
  isLoggedIn = false;
  showAdminBoard = false;
  showModeratorBoard = false;
  username?: string;

  constructor(
    private storageService: StorageService,
    private authService: AuthService
  ) {}


  logout(): void {
    this.authService.logout().subscribe({
      next: res => {
        console.log(res);
        this.storageService.clean();

        window.location.reload();
      },
      error: err => {
        console.log(err);
      }
    });
  }

}
