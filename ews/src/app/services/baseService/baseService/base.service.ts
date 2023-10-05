import { HttpClient, HttpResponse, HttpResponseBase } from '@angular/common/http';
import { of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

export class BaseService<T> {
  /**
   * Make HTTP client available to child classes
   */
  baseurl=''
  constructor(private url, private http: HttpClient) {
    this.baseurl = this.url;
  }

  public get(className: new (data: any) => T, getUrl?: string) {
    // console.log(this.getFinalUrl(getUrl))
    const url = this.getFinalUrl(getUrl);
    console.log('in GET', url)
    return this.http.get(url).pipe(
      map(res=>{
        let obj = new className(res as T);
        return obj;
      }),
      catchError(error=>{
        return of(error)
      })
    );
  }

  public post(className: new (data: any) => T,data:T, postUrl?:string){
    console.log(this.baseurl)
    let url = this.getFinalUrl(postUrl);
    url = url.endsWith('/') ? url : url + '/'
    return this.http.post(url,data).pipe(
      map(res=>{
        let obj = new className(res as T);
        return obj;
      }),
      catchError(error=>{
        return of(error)
      })
    );
  }



  getFinalUrl(urlExtended=''): string {
    return this.gethost() + this.baseurl + urlExtended;
  }

  gethost(){
    return 'http://' + window.location.hostname + ':8000';
  }
}
