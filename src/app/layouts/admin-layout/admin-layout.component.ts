import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/__services/storage.service';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.css']
})
export class AdminLayoutComponent {

  constructor(
    private storageService: StorageService,
    private route: Router,

  ) {}


  logout(): void {
    this.storageService.signOut();
    // window.location.reload();
    this.route.navigate(['/login']);
  }

}
