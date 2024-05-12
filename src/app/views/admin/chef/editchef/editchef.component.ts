import { HttpErrorResponse } from '@angular/common/http';
import { Component, Inject, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ChefService } from 'src/app/__services/chef.service';
import { Chef } from 'src/app/models/chef';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editchef',
  templateUrl: './editchef.component.html',
  styleUrls: ['./editchef.component.css']
})
export class EditchefComponent implements OnInit {
  @Input() id!: number;
  chef!: Chef;
  updateForm!: FormGroup;
  idchef:any
  OneUser:any=[]
  messageSuccess: any;
  messageError: any;
  image: any;


  constructor(
    private dialogRef: MatDialogRef<EditchefComponent>,
    @Inject(MAT_DIALOG_DATA) private data: any,
    private chefservice:ChefService,
        private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.chef = this.data.chef;
    this.initializeForm();
  }

  initializeForm(): void {
    this.updateForm = this.fb.group({
      nomPrenom: [this.chef?.nomPrenom || '', Validators.required],
      description: [this.chef?.description|| '', Validators.required],
      image: [this.chef?.image || '', Validators.required],
      facebook: [this.chef?.facebook || '', Validators.required],
      instagram: [this.chef?.instagram || '', Validators.required],

    });
  }

  updateChef(id: number) {
    if (this.updateForm.valid) {
      const updatedchef: Chef = this.updateForm.value;
      this.chefservice.updateChef(id, updatedchef).subscribe(() => {
        Swal.fire({
          title: 'Success!',
          text: 'Chef updated successfully!',
          icon: 'success',
          timer: 1500,
          timerProgressBar: true
        });
        this.dialogRef.close('Close');
      }, error => {
        console.error('Error updating Chef:', error);
        Swal.fire({
          title: 'Error!',
          text: 'Failed to update Chef.',
          icon: 'error',
          timer: 1500,
          timerProgressBar: true
        });
      });
    } else {
      console.error('Chef ID or object is undefined');
    }}

   
  
    

}
