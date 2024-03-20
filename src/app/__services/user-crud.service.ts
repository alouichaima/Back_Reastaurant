import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserCRUDService {
  private baseUrl = 'http://localhost:8021/api/utilisateur/';


  constructor(private http: HttpClient) {}
  GetOneUser(id:any){
    return this.http.get('http://localhost:8021/api/utilisateur/GetOneUser/'+id)
   }

  updateprofil(id: any, us: any) {
    return this.http.put(this.baseUrl + 'modifier/' + id, us);
  }


  ModifierPhoto(iduser: any, file: any) {
    return this.http.put(
      'http://localhost:8021/api/utilisateur/ModifierPhoto/' + iduser,
      file
    );
  }
}
