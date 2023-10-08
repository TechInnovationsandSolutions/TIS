import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  title = 'tis';
  showNavMenu = false;

  onActivate() {
    window.scrollTo(0, 0);
  }

  showNavFn() {
    this.showNavMenu = !this.showNavMenu;
  }
}
