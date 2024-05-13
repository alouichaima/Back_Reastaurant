import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { WishlistDto } from '../models/wishlist';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {

  constructor(private http: HttpClient) { }

  getUserWishlist(userId: number): Observable<WishlistDto[]> {
    return this.http.get<WishlistDto[]>(`http://localhost:9000/api/wishlist/meswishlist/${userId}`);
  }

}
