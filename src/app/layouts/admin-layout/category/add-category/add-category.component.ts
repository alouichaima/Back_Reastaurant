import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { error } from 'jquery';
import { CategoryService } from 'src/app/__services/category.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit{
  @Output() closeEvent = new EventEmitter();
  categoryForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private categoryService: CategoryService
  ) {}

  ngOnInit(): void {
    this.categoryForm = this.formBuilder.group({
      name: [null, Validators.required],
      description: [null]
    });
  }

  onSubmit(): void {
    if (this.categoryForm.valid) {
      const categoryData = this.categoryForm.value;

      this.categoryService.addCategorie(categoryData).subscribe(
        response => {
          // Gérez la réponse réussie du backend
          console.log('Category added successfully', response);

          // Utilisez SweetAlert2 pour afficher une alerte stylée
          Swal.fire({
            icon: 'success',
            title: 'Successfully added',
            showConfirmButton: false,
            timer: 1500
          });

          this.close();
        },
        error => {
          // Gérez l'erreur du backend si nécessaire
          console.error('Error adding category', error);
        }
      );
    } else {
      // Gérez le formulaire invalide si nécessaire
    }
  }

  close(): void {
    this.closeEvent.emit();
  }
}
