import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommandeService } from 'src/app/__services/commande.service';
import { StorageService } from 'src/app/__services/storage.service';
import { MenuItem } from 'src/app/models/menu-item';

@Component({
  selector: 'app-mescommandes',
  templateUrl: './mescommandes.component.html',
  styleUrls: ['./mescommandes.component.css']
})
export class MescommandesComponent implements OnInit {
  menuItem:any;
  iduser:any;
  idmenuItem:any;
  user:any;
  constructor(private servicecmd:CommandeService,private router:Router,private token:StorageService) { }
  ngOnInit(): void {
    this.getMesCommandes();
    this.user=this.token.getUser();
    console.log(this.user)
    this.iduser = this.user.id;
    console.log(this.iduser)
  }

  public getMesCommandes(): void {
    const user = this.token.getUser();
    this.iduser=user.id;
    console.log('mescommandes',this.iduser)
    this.servicecmd.getMesCommandes(this.iduser).subscribe(
      (response: MenuItem[]) => {
        this.menuItem = response;
        console.log(this.menuItem);
      },
      (error : HttpErrorResponse) => {
        alert(error.message);
      }
    )
  }


}
