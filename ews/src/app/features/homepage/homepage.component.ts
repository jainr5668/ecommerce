import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { clickListenerEvent } from '@patterns/common.model';
import { HomepageModel } from './homepage.model';
import { Observable } from 'rxjs';
import { StringIdsType } from 'src/stringIds';
import { TranslateService } from '@ngx-translate/core';
import { ProductcardModel } from '@patterns/productcard';
import { ImageSliderImageHeight, ImageSliderImageModel, ImageSliderModel } from '@patterns/imageslider';
import { TryModel2, TryService } from '@lnc/services//try';

@Component({
  selector: 'pattern-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
})
export class HomepageComponent {
  @Input() public homepage: HomepageModel;

  @Output() clickListener = new EventEmitter();

  mainData: TryModel2 = null;
  menuData: ProductcardModel[] = [];
  imageList: ImageSliderImageModel[] = [];
  imageSlider:ImageSliderModel

  constructor(
    private translate: TranslateService,
    private tryService: TryService
  ) {
    this.tryService.get(TryModel2,'hello').subscribe((data: TryModel2) => {
      this.mainData = data;
      let imageList = []
      data.data.forEach((item) => {
        item.colour[0].images.forEach(image => {
          imageList.push(this.tryService.gethost() + image)
        })
        this.menuData.push(
          new ProductcardModel(
            item.id as unknown as string,
            item.name,
            item.description,
            item.colour[0].colour,
            item.brand,
            item.colour[0].price,
            item.colour[0].discount,
            imageList
          )
        );
        
        // this.imageList.push(new ImageSliderImageModel(this.tryService.gethost() + item.image));
      });
      this.imageSlider = new ImageSliderModel()
      this.imageSlider.setImagesliderValues('image', this.imageList, ImageSliderImageHeight.SMALL)
    });
  }

  public getLocalizedString$(stringId: StringIdsType): Observable<string> {
    return this.translate.stream(stringId);
  }

  onClicked(event: Event) {
    const eventObject = new clickListenerEvent(event, this.homepage.id);
    if (this.homepage.event) {
      this.homepage.event(eventObject);
    } else {
      this.clickListener.emit(eventObject);
    }
  }
}
