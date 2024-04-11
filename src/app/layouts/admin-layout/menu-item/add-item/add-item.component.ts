import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MenuitemService } from 'src/app/__services/menuitem.service';
import Swal from 'sweetalert2';
import { Category } from '../../category/category';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']

})
export class AddMenuItemComponent implements OnInit {
  @Output() closeEvent = new EventEmitter();
  menuItemForm!: FormGroup;
  categories: Category[] = [];
  category!:Category;
  constructor(
    private formBuilder: FormBuilder,
    private menuItemService: MenuitemService
  ) {}

  ngOnInit(): void {
    this.menuItemForm = this.formBuilder.group({
      name: [null, Validators.required],
      description: [null, Validators.required],
      prix: [null, Validators.required],
      categorie_id: [null, Validators.required]
    });

    this.loadCategories();
  }

  loadCategories(): void {
    this.menuItemService.getCategories().subscribe(
      categories => {
        this.categories = categories;
      },
      error => {
        console.error('Error loading categories', error);
      }
    );
  }

  onSubmit(): void {
    if (this.menuItemForm.valid) {
      const menuItemData = this.menuItemForm.value;

      this.menuItemService.addItem(menuItemData).subscribe(
        response => {
          // Handle successful backend response
          console.log('Menu item added successfully', response);

          // Use SweetAlert2 to display a stylish alert
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

  close(): void {
    this.closeEvent.emit();
  }
}
