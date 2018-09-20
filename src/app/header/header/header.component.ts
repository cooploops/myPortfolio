import { Component, OnInit } from '@angular/core';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { Router, ActivatedRoute } from '@angular/router';


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

  constructor(private router: Router, private activeRoute: ActivatedRoute) { }

  currentPath: string;
  home = '/';
  aboutMe = '/about';

  ngOnInit() {
  }

  // onIfNoCanClick(id: string) {
  //   const elId = '#' + id;
  //   document.querySelector(elId).scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'start' });
  // }

  onProjectsBtnClick() {
    this.currentPath = this.router.routerState.snapshot.url;
    console.log(this.router.routerState.snapshot.url);
  }

  onProjectsLinkClick(id: string) {
    if (this.currentPath !== this.home) {
      this.slowScroll(id);
    } else {
      this.fastScroll(id);
    }
}

  private fastScroll(id: string) {
    const elId = '#' + id;
    document.querySelector(elId).scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'start' });
  }

  private slowScroll(id: string) {
    const elId = '#' + id;
    this.router.navigate(['/']);
    setTimeout(() => {
      document.querySelector(elId).scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'start' });
    }, 100);
  }
}
