import { Injectable } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { IContact } from '../core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TiswebService {
  private _url = 'https://boring-name.herokuapp.com/';

  constructor(private sanitizer: DomSanitizer, private http: HttpClient) {}

  makeSvg(icon: string) {
    console.log('icon', icon);
    if (icon) {
      console.log('yes icon', icon);
      let svg: SafeHtml;
      svg = this.sanitizer.bypassSecurityTrustHtml(icon);
      return svg;
    }
    return '';
  }

  sendEmail(message: IContact) {
    return this.http.post<any>(this._url + 'sendmail', message);
  }
}
