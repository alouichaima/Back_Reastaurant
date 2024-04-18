import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ChefService } from 'src/app/__services/chef.service';

@Component({
  selector: 'app-addchef',
  templateUrl: './addchef.component.html',
  styleUrls: ['./addchef.component.css']
})
export class AddchefComponent implements OnInit {
  url:any ="";


  coa: any={'nomPrenom':'','description':'','typeC':'','image':'','facebook':'','instagram':''};
  constructor( private service:ChefService, private router:Router)
  { }

  ngOnInit(): void {
  }

  add(){
    console.log(this.coa);
    this.service.addchef(this.coa).subscribe({

       next: (data:any)=>{
         this.router.navigate (['admin/listechef'])

      },

      error: (e:any)=> console.error(e),

      complete:()=>{}

      })


}


}
