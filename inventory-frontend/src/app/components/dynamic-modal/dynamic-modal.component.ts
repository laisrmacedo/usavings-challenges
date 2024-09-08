import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { GlobalService } from '../../services/global.service';
import { HttpClientModule } from '@angular/common/http';
import { Product } from '../../interfaces/interfaces';

@Component({
  selector: 'app-dynamic-modal',
  standalone: true,
  imports: [CommonModule, MatDialogModule, MatButtonModule, ReactiveFormsModule, HttpClientModule],
  templateUrl: './dynamic-modal.component.html',
  styleUrl: './dynamic-modal.component.css'
})
export class DynamicModalComponent {
  createProductForm: FormGroup
  editProductForm: FormGroup

  
  constructor(
    public dialogRef: MatDialogRef<DynamicModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder,
    private globalService: GlobalService
  ) {
    this.createProductForm = this.fb.group({
      name: new FormControl('', [Validators.required]),
      price: new FormControl('', [Validators.required]),
      unit: new FormControl('', [Validators.required]),
      shelf_life: new FormControl('', [Validators.required])
    })
    this.editProductForm = this.fb.group({
      price: new FormControl(''),
      unit: new FormControl(''),
      shelf_life: new FormControl('')
    })
    console.log(">>>>>",this.units)
  }
  
  units: any = ['l','ml', 'kg', 'g' ]


  closeDialog(): void {
    this.dialogRef.close();
  }

  onDelete(id: string): void {
    this.globalService.deleteProduct(id).subscribe({
      next: () => {
        this.closeDialog()
      }
    })
  }

  onEdit(id: string): void {
    this.globalService.updateProduct(id, this.editProductForm.value).subscribe({
      next: () => {
        this.closeDialog()
      }
    })
  }

  onSubmit(){
    console.log(this.createProductForm.value)
    this.globalService.postProduct(this.createProductForm.value).subscribe({
      next: () => {
        this.closeDialog()
      }
    })
  }
}
