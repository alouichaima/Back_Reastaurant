import { StorageService } from 'src/app/__services/storage.service';
import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { UserCRUDService } from 'src/app/__services/user-crud.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-monprofil',
  templateUrl: './monprofil.component.html',
  styleUrls: ['./monprofil.component.css']
})
export class MonprofilComponent implements OnInit {

  User: any= {'username':'', 'email':'', 'role':''};
  iduser:any
  OneUser:any=[]
  messageSuccess: any;
  messageError: any;
  image: any;



  constructor(private serviceuser:UserCRUDService,private token: StorageService,private router:Router,
    private UserCRUDService:UserCRUDService,

  ) { }

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
  selectImage(event: any) {
    if (event.target.files.length > 0) {
      const photo = event.target.files[0];
      this.image = photo;
    }
  }

  updatephoto() {
    if (!this.iduser) {
      console.error("User ID is undefined.");
      return;
    }

    let body = new FormData();
    body.append('file', this.image);

    this.UserCRUDService.ModifierPhoto(this.iduser, body).subscribe(
      response => {
        this.ngOnInit();
        this.messageSuccess = response;
      },
      (err: HttpErrorResponse) => {
        this.messageError = err;
      }
    );
  }

}
