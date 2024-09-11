import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { ProductsPageComponent } from './pages/products-page/products-page.component';
import { OverviewPageComponent } from './pages/overview-page/overview-page.component';
import { ManagementPageComponent } from './pages/management-page/management-page.component';
import { CacheInterceptor } from './cache.interceptor';

export const routes: Routes = [
  { path: 'produtos', component: ProductsPageComponent },
  { path: '', component: OverviewPageComponent },
  { path: 'gerenciamento', component: ManagementPageComponent },
  { path: '', redirectTo: '/produtos', pathMatch: 'full' },
];

@NgModule({
  imports: [
    [RouterModule.forRoot(routes, { useHash: false })],
  ],
  exports: [RouterModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: CacheInterceptor,
      multi: true 
    }
  ]
})
export class AppRoutingModule { }
