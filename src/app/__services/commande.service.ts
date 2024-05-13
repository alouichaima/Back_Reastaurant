import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Commande } from '../models/Commande';
import { MenuItem } from '../models/menu-item';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class CommandeService {

  constructor(private http: HttpClient) { }

  passerCommande(idUser: number, idMenuItem: number): Observable<any> {
    const commandeDto = {
      userId: idUser,
      menuItemId: idMenuItem
    };
  
    return this.http.post<any>('http://localhost:9000/commande/passer', commandeDto, {
      headers: this.createAuthorizationHeader()
    });
  }
  
  

  public getMesCommandes(id: any): Observable<Commande[]> {
    return this.http.get<MenuItem[]>('http://localhost:9000/commande/mescommandes/' + id);
  }

  createAuthorizationHeader(): HttpHeaders {
    let authHeaders: HttpHeaders = new HttpHeaders();
    return authHeaders.set(
      "Authorization", "Bearer " + StorageService.getToken()
    );
  }
}
