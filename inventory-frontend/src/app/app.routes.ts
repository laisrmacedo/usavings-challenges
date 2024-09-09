import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsPageComponent } from './pages/products-page/products-page.component';
import { OverviewPageComponent } from './pages/overview-page/overview-page.component';
import { ManagementPageComponent } from './pages/management-page/management-page.component';

export const routes: Routes = [
  { path: 'produtos', component: ProductsPageComponent },
  { path: '', component: OverviewPageComponent },
  { path: 'gerenciamento', component: ManagementPageComponent },
  { path: '', redirectTo: '/produtos', pathMatch: 'full' },
];

@NgModule({
  imports: [
    [RouterModule.forRoot(routes, { useHash: false })]
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
