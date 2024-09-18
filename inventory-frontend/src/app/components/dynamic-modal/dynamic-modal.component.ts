import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { GlobalService } from '../../services/global.service';
import { HttpClientModule } from '@angular/common/http';
import { Product, Stock } from '../../interfaces/interfaces';

@Component({
  selector: 'app-dynamic-modal',
  standalone: true,
  imports: [CommonModule, MatDialogModule, MatButtonModule, ReactiveFormsModule, HttpClientModule],
  templateUrl: './dynamic-modal.component.html',
  styleUrl: './dynamic-modal.component.css',
  changeDetection: ChangeDetectionStrategy.Default
})
export class DynamicModalComponent implements OnInit {
  createProductForm: FormGroup
  createStockForm: FormGroup
  editProductForm: FormGroup
  editStockForm: FormGroup

  constructor(
    public dialogRef: MatDialogRef<DynamicModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder,
    private globalService: GlobalService,
    private changeDetectorRef: ChangeDetectorRef
  ) {
    this.createProductForm = this.fb.group({
      name: new FormControl('', [Validators.required]),
      price: new FormControl('', [Validators.required]),
      unit: new FormControl('', [Validators.required]),
      shelf_life: new FormControl('', [Validators.required])
    })
    this.createStockForm = this.fb.group({
      name: new FormControl('', [Validators.required]),
      quantity: new FormControl('', [Validators.required]),
      production_date: new FormControl('')
    })
    this.editProductForm = this.fb.group({
      price: new FormControl(''),
      unit: new FormControl(''),
      shelf_life: new FormControl('')
    })
    this.editStockForm = this.fb.group({
      quantity: new FormControl(''),
      production_date: new FormControl('')
    })
  }

  productsData: Product[] = this.globalService.productsData

  units: any = ['l', 'kg']
  names: any = this.productsData.map((obj) => obj.name)

  defaultProductionDate: string = ''

  ngOnInit() {
    this.defaultProductionDate = this.getToday();
    this.changeDetectorRef.detectChanges();
  }

  getToday(): string {
    const today = new Date();
    const day = String(today.getDate()).padStart(2, '0');
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const year = today.getFullYear();

    return `${year}-${month}-${day}`;
  }

  closeDialog(): void {
    window.location.reload();
    this.changeDetectorRef.detectChanges();
    this.dialogRef.close();

    this.globalService.getAllProducts().subscribe(
      (res: any) => {
        this.globalService.productsData = res
      }
    )

    this.globalService.getAllStocks().subscribe(
      (res: any) => {
        this.globalService.stockData = res
      }
    )
  }

  onDeleteProduct(id: number): void {
    this.globalService.deleteProduct(id).subscribe({
      next: () => {
        this.closeDialog()
      }
    })
  }

  onEditProduct(id: number): void {
    this.globalService.updateProduct(id, this.editProductForm.value).subscribe({
      next: () => {
        this.closeDialog()
      }
    })
  }

  productErrorMessage: string | null = null;

  onSubmitProduct() {
    this.globalService.postProduct(this.createProductForm.value)
      .subscribe({
        error: (error) => {
          this.productErrorMessage = error.error.message
          console.log(error)
        },
        next: () => {
          this.closeDialog()
        }
      })
  }

  stockErrorMessage: string | null = null;

  onSubmitStock() {
    this.globalService.postStock(this.createStockForm.value)
      .subscribe({
        error: (error) => {
          this.stockErrorMessage = error.error.message
          console.log(error)
        },
        next: () => {
          this.closeDialog()
        }
      })
  }

  onDeleteStock(id: number): void {
    this.globalService.deleteStock(id).subscribe({
      next: () => {
        this.closeDialog()
      }
    })
  }

  onEditStock(id: number): void {
    this.globalService.updateStock(id, this.editStockForm.value).subscribe({
      next: () => {
        this.closeDialog()
      }
    })
  }
}
