import { Injectable } from "@angular/core";
import { BaseService } from "../../../baseService";
import { HttpClient } from "@angular/common/http";
import { MenuItems } from "./menu_item.model";



const URL = '/utility/menu_items/'
@Injectable({
    providedIn: 'root'
})
export class MenuItemsService extends BaseService<MenuItems>{
    constructor(http:HttpClient){
        super(URL, http);
    }
}