import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css'],
})
export class ArticleListComponent implements OnInit {
  counter: number = 0;

  // 第一種注入寫法
  // dataSvc: DataService;
  // constructor(dataSvc: DataService) {
  //   this.dataSvc = dataSvc;
  // }

  // 第二種注入寫法
  // constructor(private dataSvc: DataService) {
  constructor(public dataSvc: DataService) {
  }

  ngOnInit(): void {
    this.dataSvc.run();

    setTimeout(() => {
      this.counter++;
    }, 2000); // 查看 ngChanges 觸發時機
  }
}
