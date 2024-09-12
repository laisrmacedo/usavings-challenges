import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../../services/global.service';
import { Stock } from '../../interfaces/interfaces';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-overview-page',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './overview-page.component.html',
  styleUrl: './overview-page.component.css'
})
export class OverviewPageComponent {
  rangeDateForm: FormGroup;

  constructor(
    private globalService: GlobalService,
    private fb: FormBuilder,
  ) {
    this.rangeDateForm = this.fb.group({
      date1: new FormControl(''),
      date2: new FormControl('')
    });
  }

  stockData: Stock[] = this.globalService.stockData;

  parsedStock: any = [];

  ngOnInit() {
    this.parsedStock = this.stockData
      .sort((item1, item2) => {
        return new Date(item1.due_date).getTime() - new Date(item2.due_date).getTime();
      })
      .map((item: Stock) => {
        const updatedProductionDate = this.parseDate(new Date(item.production_date));
        const updatedDueDate = this.parseDate(new Date(item.due_date));

        return {
          ...item,
          production_date: updatedProductionDate.toString(),
          due_date: updatedDueDate.toString()
        };
      });
  }


  onFilter() {
    const startDate = this.rangeDateForm.value.date1 ? new Date(this.rangeDateForm.value.date1) : null;
    const endDate = this.rangeDateForm.value.date2 ? new Date(this.rangeDateForm.value.date2) : null;

    this.parsedStock = this.stockData
      .filter(item => {
        const dueDate = new Date(item.due_date);
        if (startDate && !endDate) {
          return dueDate >= startDate;
        }
        if (!startDate && endDate) {
          return dueDate <= endDate;
        }
        if (startDate && endDate) {
          return dueDate >= startDate && dueDate <= endDate;
        }
        return true;
      })
      .map(item => {
        const updatedProductionDate = this.parseDate(new Date(item.production_date));
        const updatedDueDate = this.parseDate(new Date(item.due_date));

        return {
          ...item,
          production_date: updatedProductionDate.toString(),
          due_date: updatedDueDate.toString()
        };
      });
  }

  parseDate(value: Date) {
    const date = new Date(value);

    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();

    return `${day}/${month}/${year}`;
  }

    isExpired(dueDate: string): boolean {
    const [day, month, year] = dueDate.split('/').map(Number);
    const expirationDate = new Date(year, month - 1, day).getTime();
    const today = new Date();

    today.setHours(0, 0, 0, 0);

    const todayTime = today.getTime();
    return expirationDate <= todayTime;
  }


  isCloseToExpire(dueDate: string): boolean {
    const today = new Date();
    const [day, month, year] = dueDate.split('/').map(Number);

    const expirationDate = new Date(year, month - 1, day);

    today.setHours(0, 0, 0, 0);
    expirationDate.setHours(0, 0, 0, 0);

    const timeDifference = expirationDate.getTime() - today.getTime();
    const diffInDays = timeDifference / (1000 * 3600 * 24);

    return diffInDays <= 3 && diffInDays > 0;
  }
}
