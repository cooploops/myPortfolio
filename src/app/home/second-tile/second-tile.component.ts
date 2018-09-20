import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-second-tile',
  template: `
    <div class="container-fluid">
    <h4 class="text-center">Technologies I use</h4>
      <carousel interval="pause">
      <div *ngIf="innerWidth > 425; else smallSlides">
        <slide class="slide-wrapper">
          <div class="row align-items-center text-center">
            <div class="col">
              <img src="../../../assets/images/angular-icon-logo-png-transparent.png" class="img-fluid">
            </div>
            <div class="col">
              <img src="../../../assets/images/react.svg" class="img-fluid">
            </div>
            <div class="col">
              <img src="../../../assets/images/bootstrap-stack.png" class="img-fluid">
            </div>
            <div class="col">
              <img src="../../../assets/images/css.png" class="img-fluid">
            </div>
            <div class="col">
              <img src="../../../assets/images/HTML_Logo.png" class="img-fluid">
            </div>
            <div class="col">
              <img src="../../../assets/images/javascript.png" class="img-fluid">
            </div>
          </div>
        </slide>
        <slide class="slide-wrapper">
          <div class="row align-items-center text-center">
            <div class="col">
              <img src="../../../assets/images/mongodb.svg" class="img-fluid">
            </div>
            <div class="col">
              <img src="../../../assets/images/gitLogo.png" class="img-fluid">
            </div>
            <div class="col">
              <img src="../../../assets/images/jquery_logo.png" class="img-fluid">
            </div>
            <div class="col">
              <img src="../../../assets/images/firebase-logo-standard.png" class="img-fluid">
            </div>
            <div class="col">
              <img src="../../../assets/images/nodejs.png" class="img-fluid">
            </div>
            <div class="col">
              <img src="../../../assets/images/SQL.svg" class="img-fluid">
            </div>
          </div>
        </slide>
        <slide class="slide-wrapper">
          <div class="row align-items-center text-center">
            <div class="col">
              <img src="../../../assets/images/Confluence.png" class="img-fluid">
            </div>
            <div class="col">
              <img src="../../../assets/images/jira-logo.png" class="img-fluid">
            </div>
            <div class="col">
              <img src="../../../assets/images/ts.png" class="img-fluid">
            </div>
            <div class="col">
              <img src="../../../assets/images/github-512.png" class="img-fluid">
            </div>
            <div class="col">
              <img src="../../../assets/images/gulp.png" class="img-fluid">
            </div>
            <div class="col">
              <img src="../../../assets/images/AWS_logo.png" class="img-fluid">
            </div>
          </div>
        </slide>
      </div>
      <ng-template #smallSlides>
        <slide class="small-slide-wrapper">
          <div class="row align-items-center text-center">
            <div class="col">
              <img src="../../../assets/images/angular-icon-logo-png-transparent.png" class="img-fluid">
            </div>
            <div class="col">
              <img src="../../../assets/images/react.svg" class="img-fluid">
            </div>
            <div class="col">
              <img src="../../../assets/images/bootstrap-stack.png" class="img-fluid">
            </div>
          </div>
        </slide>
        <slide class="small-slide-wrapper">
          <div class="row align-items-center text-center">
            <div class="col">
              <img src="../../../assets/images/css.png" class="img-fluid">
            </div>
            <div class="col">
              <img src="../../../assets/images/HTML_Logo.png" class="img-fluid">
            </div>
            <div class="col">
              <img src="../../../assets/images/javascript.png" class="img-fluid">
            </div>
          </div>
        </slide>
        <slide class="small-slide-wrapper">
          <div class="row align-items-center text-center">
            <div class="col">
              <img src="../../../assets/images/mongodb.svg" class="img-fluid">
            </div>
            <div class="col">
              <img src="../../../assets/images/gitLogo.png" class="img-fluid">
            </div>
            <div class="col">
              <img src="../../../assets/images/jquery_logo.png" class="img-fluid">
            </div>
          </div>
        </slide>
        <slide class="small-slide-wrapper">
          <div class="row align-items-center text-center">
            <div class="col">
              <img src="../../../assets/images/firebase-logo-standard.png" class="img-fluid">
            </div>
            <div class="col">
              <img src="../../../assets/images/nodejs.png" class="img-fluid">
            </div>
            <div class="col">
              <img src="../../../assets/images/SQL.svg" class="img-fluid">
            </div>
          </div>
        </slide>
        <slide class="small-slide-wrapper">
          <div class="row align-items-center text-center">
            <div class="col">
              <img src="../../../assets/images/Confluence.png" class="img-fluid">
            </div>
            <div class="col">
              <img src="../../../assets/images/jira-logo.png" class="img-fluid">
            </div>
            <div class="col">
              <img src="../../../assets/images/ts.png" class="img-fluid">
            </div>
          </div>
        </slide>
        <slide class="small-slide-wrapper">
          <div class="row align-items-center text-center">
            <div class="col">
              <img src="../../../assets/images/github-512.png" class="img-fluid">
            </div>
            <div class="col">
              <img src="../../../assets/images/gulp.png" class="img-fluid">
            </div>
            <div class="col">
              <img src="../../../assets/images/AWS_logo.png" class="img-fluid">
            </div>
          </div>
        </slide>
      </ng-template>
      </carousel>
    </div>
  `,
  styleUrls: ['./second-tile.component.css']
})
export class SecondTileComponent implements OnInit {

  innerWidth: any;

  constructor() { }

  ngOnInit() {
    this.innerWidth = window.innerWidth;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.innerWidth = window.innerWidth;
  }

}
