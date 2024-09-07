import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsPageComponent } from './pages/products-page/products-page.component';
import { OrdersPageComponent } from './pages/orders-page/orders-page.component';
import { OverviewPageComponent } from './pages/overview-page/overview-page.component';

export const routes: Routes = [
  { path: 'produtos', component: ProductsPageComponent },
  { path: 'visao-geral', component: OverviewPageComponent },
  { path: 'ordens', component: OrdersPageComponent },
  { path: '', redirectTo: '/produtos', pathMatch: 'full' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
