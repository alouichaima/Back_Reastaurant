import { Component } from '@angular/core';
import { DashboardServiceService } from 'src/app/__services/dashboard-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  totalMenuItems: number = 0;
  totalReservations: number = 0;
  bestSeller: any = "";
  commandsPassed: number = 0;
  availableTables: number = 0;
  NBRDis:any;
  NBRAPPR:any;
  NBRPEN:any;


  constructor(private dashboardService: DashboardServiceService) { }

  ngOnInit(): void {
    this.dashboardService.getDashboardStats().subscribe(stats => {
      this.totalMenuItems = stats.totalMenuItems;
      this.totalReservations = stats.totalReservations;

    });

    this.dashboardService
    .CountDISAPPROVEReservations()
    .subscribe((data) => (this.NBRDis= data));

    this.dashboardService
    .CountAPPROVEDReservations()
    .subscribe((data) => (this.NBRAPPR= data));

    this.dashboardService
    .CountPendingReservations()
    .subscribe((data) => (this.NBRPEN= data));
  }
}
