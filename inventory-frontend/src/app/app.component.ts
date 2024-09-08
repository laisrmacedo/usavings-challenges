import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';
import { GlobalService } from './services/global.service';

const isClientSide = () => typeof window !== 'undefined';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'inventory-frontend';
  constructor(
    private router: Router,
    private globalService: GlobalService
  ) {}
  
  navigate(path: string) {
    this.router.navigate([path]);
    this.setActive(path)
  }
  
  activePage: string = ''
  
  setActive(path: string) {
    this.activePage = path;
  }
  
  ngOnInit(): void {
    this.activePage = isClientSide() ? window.location.pathname : '';

    this.globalService.getAllProducts().subscribe(
      (res:any) => {
        this.globalService.productsData = res
      }
    )

    this.globalService.getAllStocks().subscribe(
      (res:any) => {
        this.globalService.stockData = res
      }
    )

    console.log("app ts", this.globalService.stockData)
  }
}



