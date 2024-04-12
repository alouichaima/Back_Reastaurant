import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MenuitemService } from 'src/app/__services/menuitem.service';
import Swal from 'sweetalert2';
import { Category } from '../../category/category';
import { CategoryService } from 'src/app/__services/category.service';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']

})
export class AddMenuItemComponent implements OnInit {
  @Output() closeEvent = new EventEmitter();
  menuItemForm!: FormGroup;
  categories: Category[] = [];
  selectedCategoryId: any | null = null; 

  constructor(
    private formBuilder: FormBuilder,
    private menuItemService: MenuitemService,
    private categoryService: CategoryService
  ) {}

  ngOnInit(): void {
    this.menuItemForm = this.formBuilder.group({
      name: [null, Validators.required],
      description: [null, Validators.required],
      price: [null, Validators.required],
      categoryId: [null, Validators.required]
    });
    this.loadCategories();
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
  

  onSubmit(): void {
    if (this.menuItemForm.valid) {
      const menuItemData = this.menuItemForm.value;
      menuItemData.categorieId = this.selectedCategoryId; // Assign selected category ID

      this.menuItemService.addMenuItem(menuItemData).subscribe(
        response => {
          console.log('Menu item added successfully', response);

          Swal.fire({
            icon: 'success',
            title: 'Successfully added',
            showConfirmButton: false,
            timer: 1500
          });

          this.close();
        },
        error => {
          console.error('Error adding menu item', error);
        }
      );
    } else {
    }
  }

  onCategoryChange(categoryId: number): void {
    this.selectedCategoryId = categoryId;
  }

  close(): void {
    this.closeEvent.emit();
  }
}