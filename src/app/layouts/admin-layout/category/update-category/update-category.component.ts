import { Component, Inject, Input, OnChanges, OnInit, SimpleChange, SimpleChanges } from '@angular/core';
import { Category } from '../category';
import { CategoryService } from 'src/app/__services/category.service';
import Swal from 'sweetalert2';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-update-category',
  templateUrl: './update-category.component.html',
  styleUrls: ['./update-category.component.css']
})
export class UpdateCategoryComponent implements OnInit {
  @Input() id!: number;
  category!: Category;
  updateForm!: FormGroup;

  constructor(
    private dialogRef: MatDialogRef<UpdateCategoryComponent>,
    @Inject(MAT_DIALOG_DATA) private data: any,
    private categoryService: CategoryService,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.category = this.data.category;
    this.initializeForm();
  }

  initializeForm(): void {
    this.updateForm = this.fb.group({
      name: [this.category?.name || '', Validators.required],
      description: [this.category?.description || '', Validators.required],
    });
  }

  updateCategory(id: number) {
    if (this.updateForm.valid) {
      const updatedCategory: Category = this.updateForm.value;
      this.categoryService.updateCategorie(id, updatedCategory).subscribe(() => {
        Swal.fire({
          title: 'Success!',
          text: 'Category updated successfully!',
          icon: 'success',
          timer: 1500,
          timerProgressBar: true
        });
        this.dialogRef.close('Close');
      }, error => {
        console.error('Error updating Category:', error);
        Swal.fire({
          title: 'Error!',
          text: 'Failed to update Category.',
          icon: 'error',
          timer: 1500,
          timerProgressBar: true
        });
      });
    } else {
      console.error('Category ID or object is undefined');
    }}}