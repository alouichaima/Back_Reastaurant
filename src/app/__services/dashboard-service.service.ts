import { Injectable } from '@angular/core';
import { MenuitemService } from './menuitem.service';
import { ReservationService } from './reservation.service';
import { Observable, forkJoin, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardServiceService {

  constructor(
    private menuitemService: MenuitemService,
    private reservationService: ReservationService
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
  }
