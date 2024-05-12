import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Commande } from '../models/Commande';
import { MenuItem } from '../models/menu-item';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CommandeService {

  constructor(private http:HttpClient) { }

  passercommande(iduser : number, idmenuItem:number){
    return this.http.post('http://localhost:9000/commande/passer/' + iduser + "/" + idmenuItem , {})
  }

  public getMesCommandes(id:any):Observable<Commande[]>{
    return this.http.get<MenuItem[]>('http://localhost:9000/commande/mescommandes/'+id);
  }
}
