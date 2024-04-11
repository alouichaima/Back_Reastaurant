import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StorageService } from 'src/app/__services/storage.service';
import { UserCRUDService } from 'src/app/__services/user-crud.service';
import { utilisateur } from 'src/app/models/utilisateur.model';

@Component({
  selector: 'app-editmonprofil',
  templateUrl: './editmonprofil.component.html',
  styleUrls: ['./editmonprofil.component.css'],
})
export class EditmonprofilComponent implements OnInit {
  id: number = 0;
  idu: any;
  us: any = {
    username:'',
    email: '',
    password: '',
  };
  utilisateur?: utilisateur;
  iduser: any;
  OneUser: any = [];
  constructor(
    private serviceuser: UserCRUDService,
    private router: Router,
    private route: ActivatedRoute,
    private token: StorageService
  ) {}

  ngOnInit(): void {
    this.us = this.token.getUser();
    const user = this.token.getUser();
    this.iduser = user.id;

    this.serviceuser
      .GetOneUser(this.iduser)
      .subscribe((data) => (this.OneUser = data));

    // this.route.queryParams.subscribe((params) => {
    //   if (params && params.special) {
    //     this.us = JSON.parse(user);
    //   }
    // });
  }

  onSubmit() {}

  retour(): void {
    this.router.navigate(['client/monprofil']);
  }
  modif(f: any): void {
    let data = f.value;
    this.serviceuser.updateprofil(this.iduser, data).subscribe(
      (response) => {
        // console.log(response);
        this.ngOnInit();
        // window.location.reload();
        this.router.navigate(['client/monprofil']);
      },
      (error: HttpErrorResponse) => {
        this.ngOnInit();
        alert('saisir votre mot de passe');
      }
    );
  }
}
