//导入模型
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//导入每个模板
import { OrderComponent } from './order/order.component';
import { MyOrderComponent } from './my-order/my-order.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
const routes: Routes = [
  { path: 'order', component: OrderComponent },
  { path: 'order:id', component: OrderComponent },
  { path: 'myOrder', component: MyOrderComponent },
  { path: 'home', component: HomeComponent },
  { path: 'home2',   redirectTo: '/home', pathMatch: 'full' }, // 重定向
  { path: '**', component: PageNotFoundComponent },//错误页面
];
//装饰器
@NgModule({
  imports: [RouterModule.forRoot(routes)],//模型依赖
  exports: [RouterModule]//输出模型到APP
})
export class AppRoutingModule { }
