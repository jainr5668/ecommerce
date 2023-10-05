import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HomepageComponent } from './homepage.component';
import { TranslateModule } from "@ngx-translate/core";
import { HomepageRoutingModule } from './Homepage.routing.module';
import { ProductcardModule } from '@patterns/productcard';
import { ImagesliderModule } from '@patterns/imageslider';

@NgModule({
  declarations: [HomepageComponent],
  imports: [
    CommonModule,
    TranslateModule,
    ProductcardModule,
    ImagesliderModule,
    HomepageRoutingModule
  ],
  exports: [HomepageComponent],
})
export class HomepageModule {}