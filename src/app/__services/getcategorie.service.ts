import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';


const BASIC_URL = "http://localhost:8022";

@Injectable({
  providedIn: 'root'
})
export class GetcategorieService {
  readonly API_URL = 'http://localhost:8022/api/categorie';
  constructor(private http:HttpClient) { }
  
  getAllCategories(){
    return this.http.get(`${this.API_URL}/all-categories`)
  }
   
  getCategoriesByName(name:string){
    return this.http.get(`${this.API_URL}/all-categories/${name}`)
  }
  createAuthorizationHeader():HttpHeaders{
    let authHeaders:HttpHeaders = new HttpHeaders();
    return authHeaders.set(
      "Authorization", "Bearer " + StorageService.getToken()
    );
  }
}
