import { Component, OnInit } from '@angular/core';
import Typed from 'typed.js';

@Component({
  selector: 'app-first-tile',
  template: `
    <div class="parallax-1"></div>
    <div class="caption">
      <span id="typed" class="text"></span>
    </div>
  `,
  styleUrls: ['./first-tile.component.css']
})
export class FirstTileComponent implements OnInit {
show = false;

  constructor() { }

  ngOnInit() {
    const first = new Typed('#typed', {
      strings: ['npm install^1000 `.`^500 `.`^500 `.`^500', 'Hi I\'m TJ', 'And Welcome to Jurass-', 'And Welcome to my Website!^3000'],
      typeSpeed: 60,
      backSpeed: 15,
      loop: false,
      smartBackspace: true,
      showCursor: false,
      onComplete: self => {
        // method available on complete of typewriter to do something if you want to
        // this.show = true;
      }
    });
  }

}
