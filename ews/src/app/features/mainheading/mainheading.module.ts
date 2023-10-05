import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MainheadingComponent } from './mainheading.component';
import { TranslateModule } from "@ngx-translate/core";
import { RouterModule } from '@angular/router';
import { ButtonModule } from '@patterns/button';

@NgModule({
  declarations: [MainheadingComponent, ],
  imports: [
    CommonModule,
    RouterModule,
    ButtonModule,
    TranslateModule
  ],
  exports: [MainheadingComponent],
})
export class MainheadingModule {}