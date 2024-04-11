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
  menuItem!:MenuItem;
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
    this.initializeForm();
  }

  initializeForm(): void {
    this.updateForm = this.fb.group({
      name: [this.menuItem?.name || null, Validators.required],
      description: [this.menuItem?.description || null, Validators.required],
      prix: [this.menuItem?.price || null, Validators.required],
    });
  }
  

  updateMenuItem(id: number) {
    if (this.updateForm.valid) {
      const updatedMenuItem: MenuItem = this.updateForm.value;
      this.itemService.updateItem(id, updatedMenuItem).subscribe(() => {
        Swal.fire({
          title: 'Success!',
          text: 'Menu item updated successfully!',
          icon: 'success',
          timer: 1500,
          timerProgressBar: true
        });
        this.dialogRef.close('Close');
      }, error => {
        console.error('Error updating Menu Item:', error);
        Swal.fire({
          title: 'Error!',
          text: 'Failed to update Menu Item.',
          icon: 'error',
          timer: 1500,
          timerProgressBar: true
        });
      });
    } else {
      console.error('Form is invalid');
    }
  }
}