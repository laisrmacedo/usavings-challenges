import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsPageComponent } from './products-page/products-page.component';
import { GoodsInPageComponent } from './goods-in-page/goods-in-page.component';
import { GoodsOutPageComponent } from './goods-out-page/goods-out-page.component';

export const routes: Routes = [
  { path: 'produtos', component: ProductsPageComponent },
  { path: 'entradas', component: GoodsInPageComponent },
  { path: 'saidas', component: GoodsOutPageComponent },
  { path: '', redirectTo: '/produtos', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
