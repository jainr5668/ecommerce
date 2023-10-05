import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ProductpageModel } from './productpage.model';
import { ImageSliderModel } from '@patterns/imageslider';
import { ProductModel, ProductService } from '@lnc/services//product';

@Component({
  selector: 'pattern-productpage',
  templateUrl: './productpage.component.html',
  styleUrls: ['./productpage.component.css'],
})
export class ProductpageComponent {
  @Input() public homepage: ProductpageModel;

  @Output() clickListener = new EventEmitter();
  imageslider:ImageSliderModel = null;
  constructor(private productService:ProductService){
    this.productService.get(ProductModel)
  }
}