import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { ChefService } from 'src/app/__services/chef.service';

@Component({
  selector: 'app-listechef',
  templateUrl: './listechef.component.html',
  styleUrls: ['./listechef.component.css']
})
export class ListechefComponent implements OnInit {

  list:any;
  constructor(private servicechef:ChefService,private router:Router) { }

  ngOnInit(): void {
    this.getallc();
    this.deleteChef;
  }


  getallc():void{

    this.servicechef.getAllChef().subscribe({next: (data) => {

    this.list= data;

    console.log(data);

    },

    error: (c) => console.error(c)

    });

      }
      deleteChef(id:number){
        this.servicechef. supprimer(id)
          .subscribe(data => {
            this.deleteChef=data;
            console.log(data);
          },
            error => console.log(error));

      }
      update(coa:any){
        this.router.navigate(['admin/editchef' ,coa]);
        let navigationExtras:NavigationExtras={

          queryParams:{

          special:JSON.stringify(coa)

          }

          }

          this.router.navigate(['admin/editchef'],navigationExtras);

      }


}
