import { map } from "rxjs/operators";
import { StringIds, StringIdsType } from "../../../../../stringIds";

export class LanguageModel{
    key: string;
    value: string;

    constructor(jsonData){
        this.key = jsonData['key'];
        this.value = jsonData['value'];
    }
}

export class LanguagesModel{
    languages : Array<LanguageModel> = [];
    constructor(jsonData){
        jsonData['languages'].forEach((language)=>{
            this.languages.push(new LanguageModel(language));
        });
    }
}


export const language_map = new Map<string, StringIdsType>()
language_map.set('en', StringIds.cENGLISH)
language_map.set('de', StringIds.cGERMAN)
language_map.set('es', StringIds.cSPANISH)
language_map.set('ja', StringIds.cJAPANESE)
