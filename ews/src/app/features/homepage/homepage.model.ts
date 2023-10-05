export class HomepageModel {
    id:string;
    event:any;
    
    setHomepageValues(id:string, event:any){
        this.id = id;
        this.event = event ?? null;
    }
}