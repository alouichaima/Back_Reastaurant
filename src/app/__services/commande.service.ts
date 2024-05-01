import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CommandeService {

  constructor(private http:HttpClient) { }

  passercommande(iduser : number, idmenuItem:number){
    return this.http.post('http://localhost:8022/commande/passer/' + iduser + "/" + idmenuItem , {})
  }
}
