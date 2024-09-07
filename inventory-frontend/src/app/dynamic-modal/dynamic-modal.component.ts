import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dynamic-modal',
  standalone: true,
  imports: [],
  templateUrl: './dynamic-modal.component.html',
  styleUrl: './dynamic-modal.component.css'
})
export class DynamicModalComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: { content: string }) {}

  close(): void {
    // Implement logic for closing the modal, if needed.
  }
}
