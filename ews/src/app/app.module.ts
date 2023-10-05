import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { contentModule } from '@patterns/content';
import { ContentModule } from '@patterns/content';
import { ButtonModule } from '@patterns/button';
import { CardModule } from '@patterns/card';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { FooterModule } from '@patterns/footer';
import { MainheadingModule } from './features/mainheading';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [AppComponent],
  providers: [],
  bootstrap: [AppComponent],
  imports: [
    FooterModule,
    MainheadingModule,
    ContentModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    TranslateModule.forRoot({
      extend: true,
      defaultLanguage: 'en',
      loader: {
        provide: TranslateLoader,
        deps: [HttpClient],
        useFactory: (http: HttpClient) => {return new TranslateHttpLoader(http, './assets/i18n/', '.json');},
      },
    }),
  ],
  exports: [TranslateModule],
})
export class AppModule {}
