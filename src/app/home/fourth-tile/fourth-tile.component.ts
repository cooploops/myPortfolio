import { Component, OnInit } from '@angular/core';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-fourth-tile',
  templateUrl: './fourth-tile.component.html',
  styleUrls: ['./fourth-tile.component.css']
})
export class FourthTileComponent implements OnInit {
  faGithub = faGithub;
  faTwitter = faTwitter;
  faLinkedin = faLinkedin;
  constructor() { }

  ngOnInit() {
  }

}
