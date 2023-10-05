import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslateModule } from "@ngx-translate/core";
import { ImagesliderModule } from '@patterns/imageslider';
import { ProductpageComponent } from './productpage.component';
import { ProductpageRoutingModule } from './productpage.routing.module';

@NgModule({
  declarations: [ProductpageComponent],
  imports: [
    CommonModule,
    TranslateModule,
    ImagesliderModule,
    ProductpageRoutingModule
  ],
  exports: [ProductpageComponent],
})
export class ProductpageModule {}