import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Category } from '../layouts/admin-layout/category/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  readonly API_URL = 'http://localhost:8021/api/categorie';
  constructor(private httpClient:HttpClient ) { }

  getAllCategories(){
    return this.httpClient.get(`${this.API_URL}/all-categories`)
  }

  addCategorie(category:any):Observable<any>{
    return this.httpClient.post(`${this.API_URL}/addcategorie`, category)
  }

  deleteCategorieById( id: any){
    return  this.httpClient.delete(`${this.API_URL}/delete-categorie/${id}`)
  }

  // Inside PubService
  updateCategorie(id: any, categorieDetails: Category): Observable<any> {
  return this.httpClient.put(`${this.API_URL}/update-categorie/${id}`, categorieDetails);
}


}
