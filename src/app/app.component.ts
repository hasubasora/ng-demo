import { Component } from '@angular/core';

//装饰器
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular14-demo';
  name = 'Angular ' ;
  msg = 'i<em> f u';
  flag = false;
  list = ['A', 'B', 'C', 'D'];
  myclass = 'abc';
  mystyle = { color: 'green', 'font-size': '18px', 'font-weight': '900' };
  fnShow(event: Event) {
    console.log(event);
  }
  current = null;
  setCurrent(event: Event,i:any) {
    this.current = i;
  }
  set=false
  hobby="123"
}
