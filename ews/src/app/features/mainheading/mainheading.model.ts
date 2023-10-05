import { StringIdsType } from "src/stringIds";

export class MainheadingModel {
    id:string;
    event:any;
    
    setMainheadingValues(id:string, event:any){
        this.id = id;
        this.event = event ?? null;
    }
}

export class ToolbarItem{
    link: string;
    value: StringIdsType;
    disabled: boolean = false;
    constructor(link:string, value:StringIdsType, disabled:boolean=false){
        this.link = link;
        this.value = value;
        this.disabled = disabled;
    }
}