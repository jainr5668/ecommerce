import { HttpClient } from "@angular/common/http";
import { BaseService } from "../../baseService";
import { ProductModel } from "./product.model";
import { Injectable } from "@angular/core";

const URL = '/product'
@Injectable({
    providedIn: 'root'
})
export class ProductService extends BaseService<ProductModel>{

    constructor(http:HttpClient){
        super(URL, http);
    }

}