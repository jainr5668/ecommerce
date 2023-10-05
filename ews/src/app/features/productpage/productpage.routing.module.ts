import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductpageComponent } from './productpage.component';

const routes: Routes = [
  {
    path: '',
    component: ProductpageComponent
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductpageRoutingModule { }
