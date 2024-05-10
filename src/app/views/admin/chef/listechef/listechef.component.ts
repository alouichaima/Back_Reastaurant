import { Chef } from './../../../../models/chef';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ChefService } from 'src/app/__services/chef.service';
import Swal from 'sweetalert2';
import { AddchefComponent } from '../addchef/addchef.component';
import { EditchefComponent } from '../editchef/editchef.component';

@Component({
  selector: 'app-listechef',
  templateUrl: './listechef.component.html',
  styleUrls: ['./listechef.component.css']
})
export class ListechefComponent implements OnInit {

  listChef:any;
  chef!:Chef;
  showAddChefForm:boolean=false;
  constructor(private servicechef:ChefService,private dialog:MatDialog, private modalService:NgbModal,private matdialog:MatDialog) { }

  ngOnInit(): void {
    this.getAllChef();
    this.chef={
      id:null,
      nomPrenom:null,
      description:null,
      image : null,
      facebook:null,
      instagram:null

    }

  }
  getAllChef(){
    this.servicechef.getAllChef().subscribe(res => this.listChef = res)
  }
  addChef(chef:any){
    this.servicechef.addChef(chef).subscribe(() => {
      this.getAllChef();

    });
  }

  deleteChefById(id:any){
    this.servicechef.deleteChefById(id).subscribe(
      () => {this.getAllChef
     }
    )
    Swal.fire({
      title: "done!",
      text: "Chef deleted successfully !",
      icon: "success"
    });
  }

  openAddChefForm(): void {
    const dialogRef = this.dialog.open(AddchefComponent, {
      width: '400px', // Adjust the width as needed
    });

    dialogRef.afterClosed().subscribe(result => {
      // Handle the result if needed
    });
  }

  closeAddChefForm(): void {
    this.showAddChefForm = false;
  }

  openUpdateChefDialog(id: number, chef: Chef) {
    this.dialog.open(EditchefComponent, {
      data: { id, chef },
      width: '500px', // Set the width as needed
    });
  }


  openAddChef(){
    this.matdialog.open(AddchefComponent);
  }





}
