import { Component, Inject, Input, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Category } from '../../category/category';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CategoryService } from 'src/app/__services/category.service';
import { MenuitemService } from 'src/app/__services/menuitem.service';
import { MenuItem } from 'src/app/models/menu-item';

@Component({
  selector: 'app-update-item',
  templateUrl: './update-item.component.html',
  styleUrls: ['./update-item.component.css']
})
export class UpdateItemComponent implements OnInit{
  @Input() id!: number;
  item!: MenuItem;
  category!: Category;
  updateForm!: FormGroup;
  categories: Category[] = [];

  constructor(
    private dialogRef: MatDialogRef<UpdateItemComponent>,
    @Inject(MAT_DIALOG_DATA) private data: any,
    private categoryService: CategoryService,
    private itemService: MenuitemService,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.category = this.data.category;
    this.item = this.data.item;
    this.loadCategories();
    this.initializeForm();
  }

  loadCategories(): void {
    this.categoryService.getAllCategories().subscribe(
      (response: any) => {
        this.categories = response;
      },
      (error: any) => {
        console.error('Error loading categories', error);
      }
    );
  }

  initializeForm(): void {
    if (this.item) {
      this.updateForm = this.fb.group({
        id: [this.item.id || null], // Add this line to include the id in the form
        name: [this.item.name || null, Validators.required],
        description: [this.item.description || null, Validators.required],
        price: [this.item.price || null, Validators.required],
        categoryId: [this.item.categoryId || null, Validators.required],
      });
    }

  }

  updateMenuItem(id: any) {
    if (this.updateForm.valid) {
      const updatedItem: MenuItem = this.updateForm.value;
      this.itemService.updateItem(id, updatedItem).subscribe(() => {
        Swal.fire({
          title: 'Success!',
          text: 'item updated successfully!',
          icon: 'success',
          timer: 1500,
          timerProgressBar: true
        });
        this.dialogRef.close('Close');
      }, error => {
        console.error('Error updating item:', error);
        Swal.fire({
          title: 'Error!',
          text: 'Failed to update item.',
          icon: 'error',
          timer: 1500,
          timerProgressBar: true
        });
      });
    } else {
      console.error('item ID or object is undefined');
    }}
  
}  