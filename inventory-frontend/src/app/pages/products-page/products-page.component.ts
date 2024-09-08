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

  productsData: Product[] = this.globalService.productsData
  
  openRegisterProductDialog(): void {
    this.globalService.openRegisterProductModal();
  }

  openEditProductDialog(product: Product): void {
    this.globalService.openEditProductModal(product);
  }

  openDeleteProductDialog(id: number): void {
    this.globalService.openDeleteProductModal(id);
  }

}
