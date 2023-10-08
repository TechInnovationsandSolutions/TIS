import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  @Output() emit = new EventEmitter();
  showNav = false;

  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    this.emit.emit();
    this.showNav = !this.showNav;
  }

}
