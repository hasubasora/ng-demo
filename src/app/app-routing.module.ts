import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { OrderComponent } from './order/order.component';
import { MyOrderComponent } from './my-order/my-order.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: 'order', component: OrderComponent },
  { path: 'myOrder', component: MyOrderComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
