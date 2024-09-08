import { Component } from '@angular/core';
import { GlobalService } from '../../services/global.service';
import { Product, Stock } from '../../interfaces/interfaces';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-management-page',
  standalone: true,
  imports: [HttpClientModule, CommonModule],
  templateUrl: './management-page.component.html',
  styleUrl: './management-page.component.css'
})
export class ManagementPageComponent{
  constructor(
    private globalService: GlobalService
  ) {}

  stockData: Stock[] = this.globalService.stockData
  
  openRegisterStockDialog(): void {
    this.globalService.openRegisterStockModal();
  }

  openEditStockDialog(item: Stock): void {
    this.globalService.openEditStockModal( item );
  }

  openDeleteStockDialog(id: number): void {
    this.globalService.openDeleteStockModal(id);
  }

  parsedStock: any = this.stockData.map((item: Stock) => {
    const updatedProductionDate = this.parsedDate(new Date(item.production_date));
    const updatedDueDate = this.parsedDate(new Date(item.due_date));
    return {
      ...item,
      production_date: updatedProductionDate.toString(),
      due_date: updatedDueDate.toString()
    };
  });

  parsedDate(value: Date) {
    const date = new Date(value);
  
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
  
    return `${day}/${month}/${year}`;
  }
  
}
