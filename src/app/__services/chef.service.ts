import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Chef } from '../models/chef';

@Injectable({
  providedIn: 'root'
})
export class ChefService {

  private baseUrl = 'http://localhost:8022/chef';
  constructor(private httpClient:HttpClient) { }

  getAllChef(){
    return this.httpClient.get(`${this.baseUrl}/all`)
  }

  addChef(c:any):Observable<any>{
    return this.httpClient.post(`${this.baseUrl}/addChef`, c)
  }

  deleteChefById( id: any){
    return  this.httpClient.delete(`${this.baseUrl}/${id}`)
  }

  // Inside PubService
  updateChef(id: any, chefDetails: Chef): Observable<any> {
  return this.httpClient.put(`${this.baseUrl}/updateChef/${id}`, chefDetails);
}

getChef(): Observable<Chef[]> {
  return this.httpClient.get<Chef[]>(this.baseUrl);
}



}
