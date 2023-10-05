export class MenuItem {
  link: string;
  value: string;
  constructor(jsonData) {
    this.link = jsonData['link'];
    this.value = jsonData['value'];
  }
}

export class MenuItems{
    menu_items:MenuItem[] = [];
    constructor(jsonData){
        jsonData['menu_items'].forEach(item=>{
            this.menu_items.push(new MenuItem(item))
        })
    }
}
