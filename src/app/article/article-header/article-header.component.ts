import {
  Component,
  Input,
  OnInit,
  OnDestroy,
  Output,
  EventEmitter,
  OnChanges,
} from '@angular/core';

@Component({
  selector: 'app-article-header',
  templateUrl: './article-header.component.html',
  styleUrls: ['./article-header.component.css'],
})

// 實作 OnInit, OnDestroy
export class ArticleHeaderComponent implements OnInit, OnDestroy, OnChanges {
  @Input() // 輸入
  item: any;

  @Output() // 輸出
  delete = new EventEmitter<any>(); // 事件發設計

  @Output() // 輸出
  titleChanged = new EventEmitter<any>(); // 事件發設計

  isEdit = false;
  newTitle = '';
  orig_item: any;

  // 建構式
  constructor() {}

  // 單向繫結
  doEdit($event: Event) {
    const title = ($event.target as HTMLInputElement).value;
    this.newTitle = title;
    this.titleChanged.emit({ id: this.item.id, title });
  }

  doCancel($event: Event) {
    ($event.target as HTMLInputElement).value = this.item.title;
  }

  // 雙向繫結，需透過 ngOnChanges 產生新的物件，才不會異動到原始資料
  doEdit2() {
    this.titleChanged.emit(this.item);
  }

  doCancel2(){
    this.item = Object.assign({}, this.orig_item);
    this.isEdit = false;
  }

  deleteArticle() {
    this.delete.emit(this.item);
  }

  // 初始化
  ngOnInit(): void {
    this.newTitle = this.item.title;
  }

  // 透過 ngOnChanges，可以避免直接使用 ngModel 導致相依性很重
  // ngOnChanges 會在 Input 屬性發生變化時觸發，並提供變化的資訊
  ngOnChanges(changes: any): void {
    // 檢查是否有變化的 item 屬性
    if (changes.item) {
      this.orig_item = changes.item.currentValue;
      // 在 ngOnChanges 中，避免直接修改原始物件，創建新的物件以避免相依性問題
      this.item = Object.assign({}, changes.item.currentValue);
    }
  }

  // 元件摧毀之前執行。很少再使用
  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
  }
}
