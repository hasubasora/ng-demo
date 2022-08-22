// //导入模型
import { NgModule } from '@angular/core';//核心
import { BrowserModule } from '@angular/platform-browser';//浏览器核心
import { FormsModule } from '@angular/forms'; //表单
import { AppRoutingModule } from './app-routing.module';//把路径导入

// //导入每个模板ts
import { AppComponent } from './app.component';
import { OrderComponent } from './order/order.component';
import { MyOrderComponent } from './my-order/my-order.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';


//****************移动到单独路由 ****************/
// import { RouterModule, Routes } from "@angular/router";
// const appRoutes: Routes = [
//   { path: 'order', component: OrderComponent },
//   { path: 'first', component: FirstComponent },
//   { path: 'second', component: SecondComponent },
//   // { path: 'second', redirectTo:'first', pathMatch:'full' },//重定向
//   // { path: '**', component: PageNotFoundComponent },//错误匹配
// ]
//****************移动到单独路由 ****************/

// //装饰器
@NgModule({
  declarations: [//把模板组件加载出来
    AppComponent, OrderComponent, MyOrderComponent, PageNotFoundComponent, HomeComponent,
  ],
  imports: [//使用的模型依赖
    BrowserModule
    , FormsModule//注册表单模型
    , AppRoutingModule//注册路由
    //****************移动到单独路由 ****************/
    // ,RouterModule.forRoot([
    // {path: 'crisis-list', component: OrderComponent},
    // {path: 'heroes-list', component: FirstComponent},
    // ])
    //     , RouterModule.forRoot(appRoutes)//appRouter，根节点有效
    //****************移动到单独路由 ****************/
  ],
  //   //提供者
  providers: [],//配置项目需要服务
  bootstrap: [AppComponent]//主控件
})

// //根模块不需要导出任何东西
export class AppModule { }
