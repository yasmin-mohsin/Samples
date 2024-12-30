import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from '../home/home.component';
import { CategoryComponent } from '../category/category.component';
import { ProductComponent } from '../product/product.component';
import { BasketComponent } from '../basket/basket.component';

const routes: Routes = [
  {
    path: '', component: LayoutComponent, children: [
      { path: 'home', component: HomeComponent },
      { path: 'category/face', component: CategoryComponent },
      { path: 'category/body', component: CategoryComponent },
      { path: 'category/hair', component: CategoryComponent },
      { path: 'category/kids', component: CategoryComponent },
      { path: 'product', component: ProductComponent },
      { path: 'basket', component: BasketComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
