import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { MenuItem } from '../models/menu-item';
import { Category } from '../layouts/admin-layout/category/category';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class MenuitemService {

  readonly API_URL = 'http://localhost:9000/api/menuitems'; // Corrected URL
  readonly API_CART = 'http://localhost:9000/cart'; 
  readonly API_CAT = 'http://localhost:9000/api/categories'; // Assuming category endpoint URL
  


  constructor(private httpClient: HttpClient) {}

  fetchItemList(): Observable<any> {
    return this.httpClient.get(`${this.API_URL}/all-items`);
  }
  
  getAllMenuItems(): Observable<any> {
    return this.httpClient.get(`${this.API_URL}/all-items`);
  }

  
  addToCart(menuItemId: any): Observable<any> {
    const cartDto = {
      menuItemId: menuItemId,
      userId: StorageService.getUserId()
    };
    return this.httpClient.post(`${this.API_CART}/addtocart`, cartDto, {
      headers: this.createAuthorizationHeader()
    });
  }




  addMenuItem(menuItem: MenuItem): Observable<MenuItem> {
    return this.httpClient.post<MenuItem>(`${this.API_URL}/additem`, menuItem);
  }
  
  deleteItemById(id: any): Observable<any> {
    return this.httpClient.delete(`${this.API_URL}/delete-item/${id}`);
  }

  updateItem(id: any, itemDetails: MenuItem): Observable<any> {
    return this.httpClient.put(`${this.API_URL}/update-item/${id}`, itemDetails);
  }
  
  getMenuItems(): Observable<MenuItem[]> {
    return this.httpClient.get<MenuItem[]>(this.API_URL);
  }

  getCategories(): Observable<Category[]> {
    return this.httpClient.get<Category[]>(this.API_CAT);
  }



  private createAuthorizationHeader(): HttpHeaders {
    let authHeaders: HttpHeaders = new HttpHeaders();
    return authHeaders.set(
      "Authorization", "Bearer " + StorageService.getToken()
    );
  }



  getMenuItem(): Observable<any[]> {
    return this.httpClient.get(`${this.API_URL}/all-items`, { responseType: 'text' }).pipe(
      map((response: string) => {
        const lines = response.split('\n');
        const items = lines.filter(line => line.trim() !== '');
        const parsedItems = items.map(item => JSON.parse(item));
        return parsedItems;
      })
    );
  }

}
