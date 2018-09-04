import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-second-tile',
  template: `
    <div class="container-fluid">
    <h4 class="text-center">Technologies I use</h4>
      <carousel interval="3000">
        <slide class="slide-wrapper">
          <div class="row align-items-center">
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
          <div class="row align-items-center">
            <div class="col">
              <img src="../../../assets/images/mongodb.svg" class="img-fluid">
            </div>
            <div class="col">
              <img src="../../../assets/images/git-for-windows.png" class="img-fluid">
            </div>
            <div class="col">
              <img src="../../../assets/images/jquery_logo.png" class="img-fluid">
            </div>
            <div class="col">
              <img src="../../../assets/images/firebase-logo-standard.png" class="img-fluid">
            </div>
            <div class="col">
              <img src="../../../assets/images/nodejs-512.png" class="img-fluid">
            </div>
            <div class="col">
              <img src="../../../assets/images/SQL.svg" class="img-fluid">
            </div>
          </div>
        </slide>
        <slide class="slide-wrapper">
          <div class="row align-items-center">
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
      </carousel>
    </div>
  `,
  styleUrls: ['./second-tile.component.css']
})
export class SecondTileComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
