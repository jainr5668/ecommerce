import { Injectable } from "@angular/core";
import { BaseService } from "../../../baseService";
import { HttpClient } from "@angular/common/http";
import { LanguagesModel } from "./language.model";



const URL = '/utility/languages'
@Injectable({
    providedIn: 'root'
})
export class LanguageService extends BaseService<LanguagesModel>{
    constructor(http:HttpClient){
        super(URL, http);
    }
}