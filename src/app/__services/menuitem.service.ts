import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MenuItem } from '../models/menu-item';
import { Category } from '../layouts/admin-layout/category/category';

@Injectable({
  providedIn: 'root'
})
export class MenuitemService {
  readonly API_URL = 'http://localhost:8021/api/menuitems'; // Corrected URL
  readonly API_CAT = 'http://localhost:8021/api/categories'; // Assuming category endpoint URL
  constructor(private httpClient: HttpClient) {}

  fetchItemList(): Observable<any> {
    return this.httpClient.get(`${this.API_URL}/all-items`);
  }

  addItem(item: any): Observable<any> {
    return this.httpClient.post(`${this.API_URL}/additem`, item);
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
}
