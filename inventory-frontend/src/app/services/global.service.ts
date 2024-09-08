import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Product } from '../interfaces/interfaces';
import { MatDialog } from '@angular/material/dialog';
import { DynamicModalComponent } from '../components/dynamic-modal/dynamic-modal.component';

type Entity = 'product' | 'stock'

@Injectable({
  providedIn: 'root'
})
export class GlobalService{
  apiUrl = 'http://localhost:3000'

  productsData: Product[] = [{id:0, name: '', price: 0, unit: '', shelf_life: 0}]

  constructor(
    private http: HttpClient,
    private dialog: MatDialog,
  ) { }
  
  //Modal
  openRegisterModal(type: string): void {
    this.dialog.open(DynamicModalComponent, {
      width: '600px',
      panelClass: 'custom-modal',
      data: { type }
    });
  }
  
  openEditModal(type: string, product: Product): void {
    this.dialog.open(DynamicModalComponent, {
      width: '600px',
      panelClass: 'custom-modal',
      data: { type, product }
    });
  }
  
  openDeleteModal(type: string, id: number): void {
    this.dialog.open(DynamicModalComponent, {
      width: '600px',
      panelClass: 'custom-modal',
      data: { type, id }
    });
  }
  
  //Products
  getAll(path: string){
    return this.http.get<Product[]>(`${this.apiUrl}/${path}`)
  }

  
  get(id: number, path: string): Observable<Product>{
    return this.http.get<Product>(`${this.apiUrl}/${path}/${id}`)
  }
  
  post(product: Product, path: string): Observable<Product>{
    return this.http.post<Product>(`${this.apiUrl}/${path}`, product)
  }
  
  update(id: number, product: Product, path: string): Observable<Product>{
    const filteredProduct = Object.fromEntries(
      Object.entries(product).filter(([key, value]) => value !== '')
    );
    return this.http.put<Product>(`${this.apiUrl}/${path}/${id}`, filteredProduct)
  }
  
  delete(id: number, path: string): Observable<any>{
    return this.http.delete(`${this.apiUrl}/${path}/${id}`)
  }
}
