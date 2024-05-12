import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ChefService } from 'src/app/__services/chef.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-addchef',
  templateUrl: './addchef.component.html',
  styleUrls: ['./addchef.component.css']
})
export class AddchefComponent implements OnInit {
  @Output() closeEvent = new EventEmitter();

  chefForm!: FormGroup;

  constructor( private servicechef:ChefService, private formBuilder: FormBuilder)
  { }

  ngOnInit(): void {
    this.chefForm = this.formBuilder.group({
      nomPrenom: [null],
      description: [null],
      image: [null],
      facebook: [null],
      instagram: [null]


    });

  }
  onSubmit(): void {
    if (this.chefForm.valid) {
      const chefData = this.chefForm.value;

      this.servicechef.addChef(chefData).subscribe(
        response => {
          // Gérez la réponse réussie du backend
          console.log('Chef added successfully', response);

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
          console.error('Error adding category', error);
        }
      );
    } else {
    }
  }
  close(): void {
    this.closeEvent.emit();
  }




}
