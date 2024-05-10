import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/__services/category.service';
import { Category } from './category';
import { MatDialog } from '@angular/material/dialog';
import { AddCategoryComponent } from './add-category/add-category.component';
import { UpdateCategoryComponent } from './update-category/update-category.component';
import Swal from 'sweetalert2';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Menu } from 'src/app/models/menu';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit{


  listCategories:any;
  category!:Category;
  showAddCategoryForm:boolean=false;
  constructor(private categoryService:CategoryService, private dialog:MatDialog, private modalService:NgbModal,private matdialog:MatDialog ){}
  ngOnInit(): void {
    this.getAllCategories();
    this.category={
      id:null,
      name:null,
      description:null,
      menus:[],
    }
  }

  getAllCategories(){
    this.categoryService.getAllCategories().subscribe(res => this.listCategories = res)
  }

  addCategorie(categorie:any){
    this.categoryService.addCategorie(categorie).subscribe(() => {
      this.getAllCategories();

    });
  }

  deleteCategorieById(id:any){
    this.categoryService.deleteCategorieById(id).subscribe(
      () => {this.getAllCategories
     }
    )
    Swal.fire({
      title: "done!",
      text: "Category deleted successfully !",
      icon: "success"
    });
  }

  openAddCategoryForm(): void {
    const dialogRef = this.dialog.open(AddCategoryComponent, {
      width: '400px', // Adjust the width as needed
    });

    dialogRef.afterClosed().subscribe(result => {
      // Handle the result if needed
    });
  }

  closeAddCategoryForm(): void {
    this.showAddCategoryForm = false;
  }

  openUpdateCategoryDialog(id: number, category: Category) {
    this.dialog.open(UpdateCategoryComponent, {
      data: { id, category },
      width: '500px', // Set the width as needed
    });
  }


  openAddCategory(){
    this.matdialog.open(AddCategoryComponent);
  }



}
