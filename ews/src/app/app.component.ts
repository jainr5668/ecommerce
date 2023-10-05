import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ProductModel } from '@lnc/services//product';
import { LanguageService, LanguagesModel, language_map } from '@lnc/services//utility/languages';
import { TranslateService } from '@ngx-translate/core';
import { ContentModel } from '@patterns/content';
import { ElementModel, SelectOption } from '@patterns/element';
import { FooterModel, FooterTypeEnum } from '@patterns/footer';
import { StringIds } from 'src/stringIds';
// import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public title = 'ews';
  footer:FooterModel;
  content:ContentModel;
  file:FormData;
  model = {
    prop:'',
    image:''
  }
  productModel:ProductModel = new ProductModel();


  constructor(private translate:TranslateService,
    private http:HttpClient,
    private languageService:LanguageService){
    this.translate.use('en')
    this.model.prop = this.translate.currentLang;
    const options = [];
    this.languageService.get(LanguagesModel).subscribe((languages:LanguagesModel)=>{
      languages.languages.forEach(language => {
        options.push(new SelectOption(language.key, language_map.get(language.key)));
      });
      this.generate_content(options);
    }
    )
  }


  generate_content(options){
    let element = new ElementModel();
    element.select('language-select', StringIds.cLANGUAGE, this.model, 'prop', options,(event)=>{
      this.translate.use(event.event);
    })
    this.content = new ContentModel()
    this.content.setContentValues('language')
    this.content.cols = 12;
    this.content.elements = [];
    this.content.elements.push(element);


    // // Name Field
    // let element = new ElementModel();
    // element.textField('name','cNAME', this.productModel, 'name')
    // element.colspan=1;
    // this.content.elements.push(element);
  
    // // Description Field
    // element = new ElementModel();
    // element.textField('description','cDESCRIPTION', this.productModel, 'description')
    // element.colspan=1;
    // this.content.elements.push(element);
  
    // // Brand Field
    // element = new ElementModel();
    // element.textField('brand','cBRAND', this.productModel, 'brand')
    // element.colspan=1;
    // this.content.elements.push(element);
    // element = new ElementModel();
  
    // // Colour Field
    // element.textField('colour','cColour', this.productModel, 'colour')
    // element.colspan=1;
    // this.content.elements.push(element);

    // // Colour Field
    // element = new ElementModel();
    // element.numberField('price','price', this.productModel, 'price')
    // element.colspan=1;
    // this.content.elements.push(element);

    // // Colour Field
    // element = new ElementModel();
    // element.numberField('discount','discount', this.productModel, 'discount')
    // element.colspan=1;
    // this.content.elements.push(element);
  
    // // Image Field
    // let fileInput = new ElementModel();
    // fileInput.file('fileInput',StringIds.cTOGGLE, this.productModel, 'image' ,(event)=>{this.file = event.event})
    // this.content.elements.push(fileInput);
    // this.content.title = 'FIRST FORM'
    // this.footer = new FooterModel(FooterTypeEnum.APPLY_CANCEL,'upload', null, (event)=>{this.footerClicked(event)})
  }


  // footerClicked(event){
  //   const formData = new FormData();
  //   formData.append('data', JSON.stringify(this.productModel))
  //   formData.append('file', this.file.get('file'))

  //   this.tryService.post(TryModel3, formData as unknown as TryModel3).subscribe((e)=>{console.log(e)})
  // }

}
