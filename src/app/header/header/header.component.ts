import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
isCollapsed = true;

  constructor() { }

  ngOnInit() {

  }

  onIfNoCanClick(id: string) {
    const elId = '#' + id;
    document.querySelector(elId).scrollIntoView({behavior: 'smooth', block: 'center', inline: 'start'});
  }

}
