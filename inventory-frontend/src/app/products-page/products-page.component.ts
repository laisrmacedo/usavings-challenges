import { Component } from '@angular/core';
import { DynamicModalService } from '../dynamic-modal/dynamic-modal.service';

@Component({
  selector: 'app-products-page',
  standalone: true,
  imports: [],
  templateUrl: './products-page.component.html',
  styleUrl: './products-page.component.css'
})
export class ProductsPageComponent {
  constructor(private dynamicModalService: DynamicModalService) {}

  openRegisterDialog(): void {
    this.dynamicModalService.openRegisterModal();
  }
}
