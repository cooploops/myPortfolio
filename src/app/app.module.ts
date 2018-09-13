import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ModalModule } from 'ngx-bootstrap/modal';
import { PopoverModule } from 'ngx-bootstrap/popover';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header/header.component';
import { HomepageComponent } from './home/homepage/homepage.component';
import { AboutpageComponent } from './about/aboutpage/aboutpage.component';
import { AppRoutingModule } from './app-routing.module';
import { FirstTileComponent } from './home/first-tile/first-tile.component';
import { SecondTileComponent } from './home/second-tile/second-tile.component';
import { ThirdTileComponent } from './home/third-tile/third-tile.component';
import { FourthTileComponent } from './home/fourth-tile/fourth-tile.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomepageComponent,
    AboutpageComponent,
    FirstTileComponent,
    SecondTileComponent,
    ThirdTileComponent,
    FourthTileComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BsDropdownModule.forRoot(),
    ModalModule.forRoot(),
    CollapseModule.forRoot(),
    CarouselModule.forRoot(),
    PopoverModule.forRoot(),
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
