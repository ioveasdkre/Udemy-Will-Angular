import {
  Component,
  Input,
  OnInit,
  OnDestroy,
  Output,
  EventEmitter,
} from '@angular/core';

@Component({
  selector: 'app-article-header',
  templateUrl: './article-header.component.html',
  styleUrls: ['./article-header.component.css'],
})

// 實作 OnInit, OnDestroy
export class ArticleHeaderComponent implements OnInit, OnDestroy {
  @Input() // 輸入
  item: any;

  @Output() // 輸出
  delete = new EventEmitter<any>(); // 事件發設計

  @Output() // 輸出
  titleChanged = new EventEmitter<any>(); // 事件發設計

  isEdit = false;
  newTitle = '';

  // 建構式
  constructor() {}

  doEdit(title: string) {
    this.newTitle = title;
    this.titleChanged.emit({ id: this.item.id, title });
  }

  deleteArticle() {
    this.delete.emit(this.item);
  }

  // 初始化
  ngOnInit(): void {
    this.newTitle = this.item.title;
  }

  // 元件摧毀之前執行。很少再使用
  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
  }
}
