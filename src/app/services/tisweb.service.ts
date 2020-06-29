import { Injectable } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class TiswebService {

  constructor(
    private sanitizer: DomSanitizer
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
}
