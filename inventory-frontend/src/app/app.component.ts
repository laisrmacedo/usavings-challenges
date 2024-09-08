import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';
import { GlobalService } from './services/global.service';

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
  
  toChangePage(path: string, activePage: number){
    this.navigate(path)   
    this.setActive(activePage) 
  }
  
  navigate(path: string) {
    this.router.navigate([path]);
  }

  activePage: number = 1;

  setActive(itemNumber: number) {
    console.log(itemNumber)
    this.activePage = itemNumber; // Atualiza o item ativo com o número do item clicado
  }

  ngOnInit(): void {
    this.globalService.getAllProducts().subscribe(
      (res:any) => {
        this.globalService.productsData$ = res
      }
    )

    console.log(this.globalService.productsData$)
  }
}



