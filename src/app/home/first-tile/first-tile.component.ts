import { Component, OnInit } from '@angular/core';
import Typed from 'typed.js';

@Component({
  selector: 'app-first-tile',
  template: `
    <div>
      <div class="parallax-1">
      <div class="caption">
        <span id="typed" class="text"></span>
        <span *ngIf="show" class="text">I was hiding the whole time!</span>
      </div>
      </div>
    </div>
  `,
  styleUrls: ['./first-tile.component.css']
})
export class FirstTileComponent implements OnInit {
show = false;

  constructor() { }

  ngOnInit() {
    const first = new Typed('#typed', {
      strings: ['npm install^1000 `.`^500 `.`^500 `.`^500', 'Hi I\'m TJ', 'And Welcome to Jurass', 'And Welcome to my Website!^3000'],
      typeSpeed: 60,
      backSpeed: 15,
      loop: false,
      smartBackspace: true,
      onComplete: self => {
        self.destroy();
        this.show = true;
      }
    });
  }

}
