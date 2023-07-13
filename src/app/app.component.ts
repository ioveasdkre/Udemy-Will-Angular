import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  keyword = '';

  // 建構子
  constructor() {
    // setTimeout(() => {
    //   this.title = 'The Benson Web';
    // }, 2000)
  }

  keywordReset() {
    this.keyword = '';
  }
}
