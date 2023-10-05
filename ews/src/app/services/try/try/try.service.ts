import { TryModel, TryModel2, TryModel3 } from "./try.model";
import { Injectable } from "@angular/core";
import { BaseService } from "../../baseService";
import { HttpClient } from "@angular/common/http";



const URL = '/products/'
@Injectable({
    providedIn: 'root'
})
export class TryService extends BaseService<TryModel2 | TryModel3>{
    constructor(http:HttpClient){
        super(URL, http);
    }
}