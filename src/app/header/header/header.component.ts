import { Component, OnInit } from '@angular/core';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
isCollapsed = true;
faGithub = faGithub;
faTwitter = faTwitter;
faLinkedin = faLinkedin;
faEnvelope = faEnvelope;

  constructor() { }

  ngOnInit() {

  }

  onIfNoCanClick(id: string) {
    const elId = '#' + id;
    document.querySelector(elId).scrollIntoView({behavior: 'smooth', block: 'center', inline: 'start'});
  }

}
