import { StorageService } from './storage.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const BASIC_URL = "http://localhost:8022";

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http:HttpClient)  { }

  getReservations():Observable<any>{
    return this.http.get<[]>(BASIC_URL + `/api/admin/reservations`,
    {
      headers:this.createAuthorizationHeader()
    })
  }

  changeReservationStatus(reservationId:number,status:string):Observable<any>{
    return this.http.get<[]>(BASIC_URL + `/api/admin/reservation/${reservationId}/${status}`,
    {
      headers:this.createAuthorizationHeader()
    })
  }

  createAuthorizationHeader():HttpHeaders{
    let authHeaders:HttpHeaders = new HttpHeaders();
    return authHeaders.set(
      "Authorization", "Bearer " + StorageService.getToken()
    );
  }
}
