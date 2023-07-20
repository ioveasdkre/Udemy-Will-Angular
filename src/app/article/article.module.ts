import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleListComponent } from './article-list/article-list.component';
import { ArticleHeaderComponent } from './article-header/article-header.component';
import { ArticleBodyComponent } from './article-body/article-body.component';
import { FormsModule } from '@angular/forms';
import { DataService } from './data.service';
import { Data2Service } from './data2.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    ArticleListComponent,
    ArticleHeaderComponent,
    ArticleBodyComponent,
  ],
  imports: [CommonModule, FormsModule, HttpClientModule],
  providers: [DataService, Data2Service],
  exports: [ArticleListComponent], // 匯出元件
})
export class ArticleModule {}
