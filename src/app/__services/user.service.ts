import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StorageService } from './storage.service';


const API_URLW = 'http://localhost:9000/api/wishlist/';

const API_URL = 'http://localhost:9000/api/test/';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  getPublicContent(): Observable<any> {
    return this.http.get(API_URL + 'all', { responseType: 'text' });
  }

  getUserBoard(): Observable<any> {
    return this.http.get(API_URL + 'user', { responseType: 'text' });
  }



  getAdminBoard(): Observable<any> {
    return this.http.get(API_URL + 'admin', { responseType: 'text' });
  }

  addMenuItemToWishlist(wishlistDto:any):Observable<any>{
    console.log(JSON.parse(localStorage.getItem('auth-user'))['accessToken']);

    let h = new HttpHeaders().set('Authorization', 'bearer ' + JSON.parse(localStorage.getItem('auth-user'))['accessToken']);
    console.log(h, wishlistDto);

    return this.http.post('http://localhost:9000/api/wishlist/avis',wishlistDto,{
     // headers:this.createAuthorizationHeader()
     headers : h

    })
  }
  createAuthorizationHeader():HttpHeaders{
    let authHeaders:HttpHeaders = new HttpHeaders();
    return authHeaders.set(
      "Authorization", "Bearer " + StorageService.getToken()
    );
  }



}
