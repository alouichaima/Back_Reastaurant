import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { GetcategorieService } from 'src/app/__services/getcategorie.service';

import { Category } from 'src/app/layouts/admin-layout/category/category';

@Component({
  selector: 'app-getcategorie',
  templateUrl: './getcategorie.component.html',
  styleUrls: ['./getcategorie.component.css']
})
export class GetcategorieComponent {
  listCategories:any;
  category!:Category;
  showAddCategoryForm:boolean=false;
  validationForm!: FormGroup;
  


  constructor(private getcategorieservice:GetcategorieService, private dialog:MatDialog, private modalService:NgbModal,private matdialog:MatDialog,private fb: FormBuilder ){}
  ngOnInit(): void {
    this.validationForm = this.fb.group({
      name:[null, Validators.required]

    })
   
    this.getAllCategories();
    this.category={
      id:null,
      name:null,
      description:null,
      menus:[]
    }
  }
  searchCategory(){
   
    this.getcategorieservice.getCategoriesByName(this.validationForm.get(['name'])!.value).subscribe(res => this.listCategories = res)
    }
  getAllCategories(){
    this.getcategorieservice.getAllCategories().subscribe(res => this.listCategories = res)
  }

}
