import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Product } from '../interfaces/interfaces';
import { MatDialog } from '@angular/material/dialog';
import { DynamicModalComponent } from '../components/dynamic-modal/dynamic-modal.component';

@Injectable({
  providedIn: 'root'
})
export class GlobalService{
  apiUrl = 'http://localhost:3000/product'

  private productsSubject = new BehaviorSubject<Product[]>([]);
  productsData$: Observable<Product[]> = this.productsSubject.asObservable();

  // productsData: Product[] = [{id:0, name: '', price: 0, unit:'', shelf_life: 0}]

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

  openDeleteModal(type: string, id: string): void {
    this.dialog.open(DynamicModalComponent, {
      width: '600px',
      panelClass: 'custom-modal',
      data: { type, id }
    });
  }

  //Products
  getAllProducts(): Observable<Product[]>{
    return this.http.get<Product[]>(this.apiUrl)
  }

  // this.http.get<Product[]>(this.apiUrl).subscribe(products => {
  //   this.productsSubject.next(products);
  // });
  
  getProduct(id: string): Observable<Product>{
    return this.http.get<Product>(`${this.apiUrl}/${id}`)
  }
  
  postProduct(product: Product): Observable<Product>{
    return this.http.post<Product>(this.apiUrl, product)
  }
  
  updateProduct(id: string, product: Product): Observable<Product>{
    const filteredProduct = Object.fromEntries(
      Object.entries(product).filter(([key, value]) => value !== '')
    );
    return this.http.put<Product>(`${this.apiUrl}/${id}`, filteredProduct)
  }
  
  deleteProduct(id: string): Observable<any>{
    return this.http.delete(`${this.apiUrl}/${id}`)
  }
}
