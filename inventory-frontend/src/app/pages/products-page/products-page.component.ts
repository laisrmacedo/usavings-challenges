import { Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { GlobalService } from '../../services/global.service';
import { Product } from '../../interfaces/interfaces';

@Component({
  selector: 'app-products-page',
  standalone: true,
  imports: [HttpClientModule, CommonModule],
  templateUrl: './products-page.component.html',
  styleUrl: './products-page.component.css'
})
export class ProductsPageComponent{
  constructor(
    private globalService: GlobalService
  ) {}

  productsData$: any = this.globalService.productsData$

  trackByProductId(index: number, product: Product): number {
    return product.id;
  }
  
  openRegisterDialog(type: string): void {
    this.globalService.openRegisterModal(type);
  }

  openEditDialog(type: string, product: Product): void {
    this.globalService.openEditModal(type, product);
  }

  openDeleteDialog(type: string, id: string): void {
    this.globalService.openDeleteModal(type, id);
  }

}
