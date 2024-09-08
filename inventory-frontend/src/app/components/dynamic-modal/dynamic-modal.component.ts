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
  createStockForm: FormGroup
  editProductForm: FormGroup
  editStockForm: FormGroup

  
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
    this.createStockForm = this.fb.group({
      product_name: new FormControl('', [Validators.required]),
      quantity: new FormControl('', [Validators.required]),
      expiration_date: new FormControl('', [Validators.required])
    })
    this.editProductForm = this.fb.group({
      price: new FormControl(''),
      unit: new FormControl(''),
      shelf_life: new FormControl('')
    })
    this.editStockForm = this.fb.group({
      quantity: new FormControl(''),
      expiration_date: new FormControl('')
    })
  }

  // productsData: Product[] = this.globalService.productsData$
  
  units: any = ['l','ml', 'kg', 'g' ]
  names: any = ['leite', 'manteiga', 'queijo', 'coalhada', 'iogurte']
  // names: any = this.globalService.productsData$.map((obj)=> obj.unit).filter((value, index, self) => self.indexOf(value) === index);


  closeDialog(): void {
    this.dialogRef.close();
  }

  onDelete(id: number, path: string): void {
    this.globalService.delete(id, path).subscribe({
      next: () => {
        this.closeDialog()
      }
    })
  }

  onEdit(id: number, path: string): void {
    let data : any = {}
    path === 'product' ? data = this.editProductForm.value : this.editStockForm
    this.globalService.update(id, data, path).subscribe({
      next: () => {
        this.closeDialog()
      }
    })
  }

  onSubmit(path: string){
    let data : any = {}
    path === 'product' ? data = this.createProductForm.value : this.createStockForm
    this.globalService.post(data, path).subscribe({
      next: () => {
        this.closeDialog()
      }
    })
  }
}
