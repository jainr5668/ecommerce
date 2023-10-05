import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'home',
    loadChildren: () => import('./features/homepage').then(m => m.HomepageModule),
    pathMatch: 'full'
  },
  {
    path:'products/1',
    loadChildren: () => import('./features/productpage').then(m => m.ProductpageModule),
    pathMatch: 'prefix'
  },
  {
    path:'',
    redirectTo:'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
