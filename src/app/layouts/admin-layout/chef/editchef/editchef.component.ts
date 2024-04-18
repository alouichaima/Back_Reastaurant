import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ChefService } from 'src/app/__services/chef.service';

@Component({
  selector: 'app-editchef',
  templateUrl: './editchef.component.html',
  styleUrls: ['./editchef.component.css']
})
export class EditchefComponent implements OnInit {
  id:number =0;
  coa:any={'nomPrenom':'','description':'','typeC':'','image':'','facebook':'','instagram':''};

  constructor(private service:ChefService, private router:Router ,private route: ActivatedRoute ) {
    this.route.queryParams.subscribe(params=>{
      if (params && params['special']) {
        this.coa = JSON.parse(params['special']);
      }
      

      })
   }
  ngOnInit(): void {


  }
  onSubmit(){

  }

  retour():void{

    this.router.navigate(['admin/listechef']);

  }
  modif():void{
    this.service.update(this.coa).subscribe({

      next: (data:any)=>{
        this.router.navigate (['admin/listechef'])

     },

     error: (c:any)=> console.error(c),

     complete:()=>{}

     })

  }


}
