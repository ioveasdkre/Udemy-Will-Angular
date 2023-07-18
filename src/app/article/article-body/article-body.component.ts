import {
  Component,
  Input,
  OnChanges,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-article-body',
  templateUrl: './article-body.component.html',
  styleUrls: ['./article-body.component.css'],
})
export class ArticleBodyComponent implements OnInit, OnChanges {
  @Input()
  item: any;

  // 生命週期 Hook
  // 執行順序 constructor > ngOnChanges > ngOnInit
  @Input()
  counter: any;

  constructor() {
    console.log('ArticleBodyComponent: constructor');
  }

  ngOnInit(): void {
    console.log('ArticleBodyComponent: ngOnInit');
  }
  ngOnChanges(changes: any): void {
    console.log('ArticleBodyComponent: ngOnChanges');
    console.log(changes);

  }
}
