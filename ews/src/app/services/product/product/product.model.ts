export class ProductModel{
    name: string;
    description: string;
    price: number;
    brand:string;
    discount:number;
    colour:string;
    image:string;
    constructor(name=null, description=null, price=null, brand=null, discount=null, colour=null, image=null) {
        this.name = name ??  '';
        this.description = description ?? '';
        this.price = price ?? 0;
        this.brand = brand ?? '';
        this.discount = discount ?? 0;
        this.colour = colour ?? '';
        this.image = image ?? '';
    }
}