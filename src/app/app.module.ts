import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PipeComponent } from './pipe/pipe.component';
import { ArticleModule } from './article/article.module';

registerLocaleData(localeFr);

@NgModule({
  declarations: [AppComponent, HeaderComponent, FooterComponent, PipeComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ArticleModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
