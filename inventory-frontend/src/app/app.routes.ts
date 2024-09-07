import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsPageComponent } from './products-page/products-page.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { OrdersPageComponent } from './orders-page/orders-page.component';
import { OverviewPageComponent } from './overview-page/overview-page.component';

export const routes: Routes = [
  { path: 'produtos', component: ProductsPageComponent },
  { path: 'visao-geral', component: OverviewPageComponent },
  { path: 'ordens', component: OrdersPageComponent },
  { path: '', redirectTo: '/produtos', pathMatch: 'full' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    MatDialogModule,
    MatButtonModule,
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
