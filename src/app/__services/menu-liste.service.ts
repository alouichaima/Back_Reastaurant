import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuListeService {
  readonly API_URL = 'http://localhost:8021/api/menuitems';

  constructor(private httpClient: HttpClient) { }
  getAllMenuItems(): Observable<any> {
    return this.httpClient.get(`${this.API_URL}/all-items`);
  }
}
