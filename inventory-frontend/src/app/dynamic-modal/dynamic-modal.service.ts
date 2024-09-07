import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DynamicModalComponent } from '../dynamic-modal/dynamic-modal.component';

@Injectable({
  providedIn: 'root',
})
export class DynamicModalService {
  constructor(private dialog: MatDialog) {}

  openRegisterModal(): void {
    this.dialog.open(DynamicModalComponent, {
      width: '400px',
      panelClass: 'custom-modal',
      data: { type: 'register' }
    });
  }
}
