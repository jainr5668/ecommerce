export class TryModel{
    name:string;
    constructor(jsonData){
        this.name = jsonData.name
    }
}

export class TryModel3{
    id:number;
    brand:string;
    description:string;
    name:string;
    colour:ProductColourModel[];
    constructor(jsonData){
        this.id = jsonData['id']
        this.brand = jsonData['brand'];
        this.colour = [];
        jsonData['colour'].forEach(colour => {
            this.colour.push(new ProductColourModel(colour));
        });
        this.description = jsonData['description'];
        this.name = jsonData['name'];
    }
}

export class ProductColourModel{
    colour:string;
    discount:number;
    price:number;
    images:string[];
    constructor(jsonData){
        this.colour=jsonData["colour"];
        this.discount = jsonData["discount"];
        this.price=jsonData["price"];
        this.images = [];
        jsonData["images"].forEach(image => {
            this.images.push(image.image)
        });
    }
}

export class TryModel2{
    data:TryModel3[] = [];
    constructor(jsonData){
        jsonData["data"].forEach(element=>{
            this.data.push(new TryModel3(element))
        })
    }
}