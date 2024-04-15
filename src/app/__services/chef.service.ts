import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Chef } from '../models/chef';

@Injectable({
  providedIn: 'root'
})
export class ChefService {

  private baseUrl = 'http://localhost:8021/chef';
  constructor(private http:HttpClient) { }

  getAllChef()
   {
     return this.http.get(this.baseUrl + '/all');
   }

   addchef(c:Chef):Observable<object>{
    return this.http.post("http://localhost:8021/chef" ,c ).pipe()

  }

  getChefById(id: number): Observable<any>
  {
    return this.http.get(this.baseUrl +"/"+ id);
  }

  supprimer(id: number): Observable<any>
  {
    return this.http.delete(this.baseUrl +  "/" +id, { responseType: 'text' });
  }
   update(cef:Chef): any
   {
     return this.http.put(this.baseUrl ,cef).pipe();
   }

   
}
