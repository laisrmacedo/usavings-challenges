import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../../services/global.service';
import { Stock } from '../../interfaces/interfaces';

@Component({
  selector: 'app-overview-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './overview-page.component.html',
  styleUrl: './overview-page.component.css'
})
export class OverviewPageComponent {
  constructor(
    private globalService: GlobalService
  ) { }

  stockData: Stock[] = this.globalService.stockData

  parsedStock: any = this.stockData
  .sort((item1, item2) => {
    return new Date(item1.due_date).getTime() - new Date(item2.due_date).getTime();
  }).map((item: Stock) => {
    const updatedProductionDate = this.parsedDate(new Date(item.production_date));
    const updatedDueDate = this.parsedDate(new Date(item.due_date));
    console.log(`Due Date: `, updatedProductionDate, updatedDueDate);

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

  isExpired(dueDate: string): boolean {
    const today = new Date();
    const expirationDate = new Date(dueDate);
    return expirationDate < today;
  }

  isCloseToExpire(dueDate: string): boolean {
    const today = new Date();
    const [day, month, year] = dueDate.split('/').map(Number);
  
    // Cria a data de expiração no formato dd/mm/yyyy
    const expirationDate = new Date(year, month - 1, day);
  
    // Ajusta para o início do dia
    today.setHours(0, 0, 0, 0);
    expirationDate.setHours(0, 0, 0, 0);
  
    const timeDifference = expirationDate.getTime() - today.getTime();
    const diffInDays = timeDifference / (1000 * 3600 * 24);
  
    console.log(`Due Date: ${dueDate}, Days Difference: ${diffInDays}`);
    return diffInDays <= 3 && diffInDays > 0;
  }
  
}
