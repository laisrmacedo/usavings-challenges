import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product, Stock } from '../interfaces/interfaces';
import { MatDialog } from '@angular/material/dialog';
import { DynamicModalComponent } from '../components/dynamic-modal/dynamic-modal.component';

type Entity = 'product' | 'stock'

@Injectable({
  providedIn: 'root'
})
export class GlobalService{
  // apiUrl = 'http://localhost:3000'
  apiUrl = 'https://usavings-challenges.onrender.com'

  productsData: Product[] = [{id:0, name: '', price: 0, unit: '', shelf_life: 0}]
  stockData: Stock[] = [{id:0, quantity: 0, production_date: new Date(), created_at: new Date(), due_date: new Date(), product: {id:0, name: '', price: 0, unit: '', shelf_life: 0}}]

  constructor(
    private http: HttpClient,
    private dialog: MatDialog,
  ) { }
  
  //Modal
  openRegisterProductModal(): void {
    this.dialog.open(DynamicModalComponent, {
      width: '600px',
      panelClass: 'custom-modal',
      data: { type : 'register-product' }
    });
  }
  
  openEditProductModal(product: Product): void {
    this.dialog.open(DynamicModalComponent, {
      width: '600px',
      panelClass: 'custom-modal',
      data: { type : 'edit-product', product }
    });
  }

  openDeleteProductModal(id: number): void {
    this.dialog.open(DynamicModalComponent, {
      width: '600px',
      panelClass: 'custom-modal',
      data: { type : 'delete-product', id }
    });
  }






  openRegisterStockModal(): void {
    this.dialog.open(DynamicModalComponent, {
      width: '600px',
      panelClass: 'custom-modal',
      data: { type: 'register-stock' }
    });
  }
  
  openEditStockModal(item: Stock): void {
    this.dialog.open(DynamicModalComponent, {
      width: '600px',
      panelClass: 'custom-modal',
      data: { type: 'edit-stock', item }
    });
  }
  
  openDeleteStockModal(id: number): void {
    this.dialog.open(DynamicModalComponent, {
      width: '600px',
      panelClass: 'custom-modal',
      data: { type: 'delete-stock', id }
    });
  }
  
  //Basic CRUD PRODUCT
  deleteProduct(id: number){
    return this.http.delete(`${this.apiUrl}/product/${id}`)
  }
  
  updateProduct(id: number, product: Product){
    const filteredProduct = Object.fromEntries(
      Object.entries(product).filter(([key, value]) => value !== '')
    );
    return this.http.put<Product>(`${this.apiUrl}/product/${id}`, filteredProduct)
  }
  
  postProduct(product: Product): Observable<Product>{
    return this.http.post<Product>(`${this.apiUrl}/product`, product)
  }
  
  getAllProducts(){
    return this.http.get<Product[]>(`${this.apiUrl}/product`)
  }
  
  //Basic CRUD STOCK
  postStock(item: Stock){

    return this.http.post(`${this.apiUrl}/stock`, item)
  }

  deleteStock(id: number){
    return this.http.delete(`${this.apiUrl}/stock/${id}`)
  }
  
  updateStock(id: number, item: Stock){
    const filteredProduct = Object.fromEntries(
      Object.entries(item).filter(([key, value]) => value !== '')
    );
    return this.http.put(`${this.apiUrl}/stock/${id}`, filteredProduct)
  }

  getAllStocks(){
    return this.http.get<Stock[]>(`${this.apiUrl}/stock`)
  }
}
