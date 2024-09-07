import { Component } from '@angular/core';
import { DynamicModalComponent } from '../dynamic-modal/dynamic-modal.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-products-page',
  standalone: true,
  imports: [],
  templateUrl: './products-page.component.html',
  styleUrl: './products-page.component.css'
})
export class ProductsPageComponent {
  constructor(public dialog: MatDialog) {}

  openDialog(data: any): void {
    const dialogRef = this.dialog.open(DynamicModalComponent, {
      width: '250px',
      panelClass: 'custom-modal',
      data: { content: data }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
