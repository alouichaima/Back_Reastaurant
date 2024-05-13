import { WishlistService } from 'src/app/__services/wishlist.service';
import { Component, OnInit } from '@angular/core';
import { WishlistDto } from 'src/app/models/wishlist';

@Component({
  selector: 'app-getwishlist',
  templateUrl: './getwishlist.component.html',
  styleUrls: ['./getwishlist.component.css']
})
export class GetwishlistComponent implements OnInit {
  wishlists: WishlistDto[] = [];
  userId: number = 0; // Initialisez userId avec la valeur par défaut

  constructor(private wishlistService: WishlistService) { }

  ngOnInit(): void {
    // Chargez la liste de souhaits lors de l'initialisation du composant
    // Vous pouvez obtenir l'ID de l'utilisateur actuel à partir du service d'authentification ou de tout autre service
    // Pour l'exemple, nous allons utiliser l'ID 3
    this.loadUserWishlist(3);
  }

  loadUserWishlist(userId: number): void {
    this.wishlistService.getUserWishlist(userId).subscribe((wishlists: WishlistDto[]) => {
      this.wishlists = wishlists;
    });
  }
}


