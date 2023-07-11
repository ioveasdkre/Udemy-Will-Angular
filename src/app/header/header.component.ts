import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  title = 'demol';
  url = 'http://blog.miniasp.com/';
  imgUrl = '/assets/images/logo.png';
  counter = 0;

  getClass() {
    return { highlight: this.counter % 2 === 0 };
  }

  getStyle() {
    return { 'font-size': 12 + this.counter + 'px' };
  }

  chageTitle($event: MouseEvent) {
    this.counter++;
    // 案住 alt鍵 才可觸發
    if ($event.altKey) this.title = 'The Will Will Web';

    console.log($event);
  }
}
