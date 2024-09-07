import { Component, OnInit } from '@angular/core';
import { DynamicModalService } from '../../components/dynamic-modal/dynamic-modal.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-products-page',
  standalone: true,
  imports: [HttpClientModule, CommonModule],
  templateUrl: './products-page.component.html',
  styleUrl: './products-page.component.css'
})
export class ProductsPageComponent implements OnInit{
  constructor(
    private dynamicModalService: DynamicModalService,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.getProducts()
  }

  public productsData: any

  openRegisterDialog(): void {
    this.dynamicModalService.openRegisterModal();
  }

  public getProducts(){
    this.http.get('http://localhost:3000/product').subscribe(
      (res:any) => {
        console.log(res)
        this.productsData = res
      }
    )
  }

}
