import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
  encapsulation: ViewEncapsulation.None // 不要做封裝。套用渲染到整份網頁
})
export class FooterComponent {

}
