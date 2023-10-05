import { Component, Input, Output, EventEmitter } from "@angular/core";
import { clickListenerEvent } from "@patterns/common.model";
import { MainheadingModel, ToolbarItem } from "./mainheading.model";
import { Observable } from "rxjs";
import { StringIds, StringIdsType } from "src/stringIds";
import { TranslateService } from "@ngx-translate/core";
import { MenuItems, MenuItemsService } from "@lnc/services//utility/menu_item";

@Component({
  selector: 'pattern-mainheading',
  templateUrl: './mainheading.component.html',
  styleUrls: ['./mainheading.component.css']
})
export class MainheadingComponent {
  @Input() public mainheading: MainheadingModel;

  @Output() clickListener = new EventEmitter();
  toolbarItems: ToolbarItem[] = [];
  //  [
  //   new ToolbarItem('/ronak', StringIds.cFIRSTNAME),
  //   new ToolbarItem('/ronak', StringIds.cFIRSTNAME),
  //   new ToolbarItem('/ronak', StringIds.cFIRSTNAME),
  //   new ToolbarItem('/ronak', StringIds.cFIRSTNAME),
  //   new ToolbarItem('/ronak', StringIds.cFIRSTNAME),
  //   new ToolbarItem('/ronak', StringIds.cFIRSTNAME),
  // ]
  constructor(private translate: TranslateService, private menuItemsService:MenuItemsService) {
    this.menuItemsService.get(MenuItems).subscribe((data:MenuItems)=>{
      data.menu_items.forEach(item => {
        this.toolbarItems.push(new ToolbarItem(item.link, item.value as StringIdsType))
      })
    })
  }

  public getLocalizedString$(stringId: StringIdsType): Observable<string> {
    return this.translate.stream(stringId);
  }

  onClicked(event: Event) {
    const eventObject = new clickListenerEvent(event, this.mainheading.id);
    if (this.mainheading.event) {
      this.mainheading.event(eventObject);
    } else {
      this.clickListener.emit(eventObject);
    }
  }
}
