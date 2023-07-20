import { Component, OnInit } from '@angular/core';
// import { DataService } from '../data.service';
import { Data2Service } from '../data2.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css'],
})
export class ArticleListComponent implements OnInit {
  // data: any; // 測試 data2.service的話需解開
  data$!: Observable<any>; // 測試 data.service的話需註解
  counter: number = 0;

  // 第一種注入寫法
  // dataSvc: DataService;
  // constructor(dataSvc: DataService) {
  //   this.dataSvc = dataSvc;
  // }

  // 第二種注入寫法
  // constructor(private dataSvc: DataService) {
  // constructor(public dataSvc: DataService) {
  constructor(public dataSvc: Data2Service) {}

  ngOnInit(): void {
    this.dataSvc.run();

    // 測試 data.service的話需註解
    // 測試 data2.service的話需解開
    // this.dataSvc.getData().subscribe((result) => {
    //   this.data = result;
    // });

    this.data$ = this.dataSvc.getData();

    setTimeout(() => {
      this.counter++;
    }, 2000); // 查看 ngChanges 觸發時機
  }

  // 雙向繫結，需透過 ngOnChanges 產生新的物件，才不會異動到原始資料
  doDelete2(item: any) {
    // 測試 data2.service的話需解開
    // this.dataSvc.doDelete2(item).subscribe({
    //   next: (result) => {
    //     this.data = this.data.filter((value: any) => {
    //       return value.id !== item.id;
    //     });
    //   },
    //   error: (error) => {
    //     console.log(error);
    //   },
    // });
  }

  doModify(post: any) {
    // 測試 data2.service的話需解開
    // this.dataSvc.doModify(post).subscribe({
    //   next: (result) => {
    //     this.data = this.data.map((item: any) => {
    //       if (item.id === post.id) {
    //         return Object.assign({}, item, post);
    //       }
    //       return item;
    //     });
    //   },
    //   error: (error) => {
    //     console.log(error);
    //   },
    // });
  }
}
