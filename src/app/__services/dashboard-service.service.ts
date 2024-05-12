import { Injectable } from '@angular/core';
import { MenuitemService } from './menuitem.service';
import { ReservationService } from './reservation.service';
import { Observable, forkJoin, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DashboardServiceService {

  constructor(
    private menuitemService: MenuitemService,
    private reservationService: ReservationService,
    private http: HttpClient
  ) { }

  getDashboardStats(): Observable<{
    totalMenuItems: number,
    totalReservations: number,
  }> {
    return forkJoin([
      this.menuitemService.getAllMenuItems(),
      this.menuitemService.getMenuItem(),
      this.reservationService.getReservationsByUser(),
    ]).pipe(
      map(([allMenuItems, menuitems, reservations]) => ({
        totalMenuItems: (allMenuItems as any[]).length,
        totalReservations: reservations.length,
        bestSellers: []
      }))
    );
  }
  CountDISAPPROVEReservations() {
    return this.http.get('http://localhost:9000/api/CountDISAPPROVEReservations');
  }
  CountAPPROVEDReservations() {
    return this.http.get('http://localhost:9000/api/CountAPPROVEDReservations');
  }
  CountPendingReservations() {
    return this.http.get('http://localhost:9000/api/CountPendingReservations');
  }
  }
