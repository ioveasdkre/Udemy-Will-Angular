import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// 是否可被注入其他的服務元件
// 沒有該行的話，無法注入 HttpClient
@Injectable({
  providedIn: 'root',
})
export class Data2Service {
  constructor(private http: HttpClient) {}

  run() {
    console.log('Data2Service');
  }

  getData() {
    return this.http.get('api/articles.json');
  }

  doDelete2(item: any) {
    return this.http.delete(`api/articles/${item?.id}`);
  }

  doModify(post: any) {
    return this.http.put(`api/articles/${post?.id}`, post);
  }
}
