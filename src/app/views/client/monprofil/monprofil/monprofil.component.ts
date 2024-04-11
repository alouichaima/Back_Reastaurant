import { StorageService } from 'src/app/__services/storage.service';
import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { UserCRUDService } from 'src/app/__services/user-crud.service';

@Component({
  selector: 'app-monprofil',
  templateUrl: './monprofil.component.html',
  styleUrls: ['./monprofil.component.css']
})
export class MonprofilComponent implements OnInit {

  User: any= {'username':'', 'email':'', 'role':''};
  iduser:any
  OneUser:any=[]

  constructor(private serviceuser:UserCRUDService,private token: StorageService,private router:Router) { }

  ngOnInit(): void {
    const user = this.token.getUser();
    this.iduser = user.id;
    this.serviceuser.GetOneUser(this.iduser).subscribe(data=>this.OneUser=data)

  }

  update(us:any){

    this.router.navigate(['client/editprofil',us]);
    let navigationExtras:NavigationExtras={



      }

      this.router.navigate(['client/editprofil'],navigationExtras);
      this.ngOnInit();
  }

}
