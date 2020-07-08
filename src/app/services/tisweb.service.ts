import { Injectable } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { IContact } from '../core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TiswebService {
  private _url = 'http://localhost:3000/';

  constructor(
    private sanitizer: DomSanitizer,
    private http: HttpClient
  ) { }

  makeSvg(icon: string) {
    console.log('icon', icon);
    if (icon) {
      console.log('yes icon', icon);
      let svg: SafeHtml;
      svg = this.sanitizer.bypassSecurityTrustHtml(icon);
      return svg;
    }
  }

  sendEmail(message: IContact) {
    return this.http.post<any>(this._url + 'sendmail', message);
  }
}
