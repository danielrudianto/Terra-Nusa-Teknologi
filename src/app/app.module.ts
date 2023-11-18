import { Injectable, NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { HttpClientModule } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatGridListModule } from '@angular/material/grid-list';
import { ScullyLibModule } from '@scullyio/ng-lib';

import { AppComponent } from './app.component';
import { HeroPageComponent } from './page/hero-page/hero-page.component';
import { ContactPageComponent } from './page/contact-page/contact-page.component';
import { CommonModule } from '@angular/common';
import { HeaderComponentComponent } from './components/header-component/header-component.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CountUpDirective } from './directives/count-up.directive';
import { ServicePageComponent } from './page/service-page/service-page.component';
import { ServiceCarouselComponent } from './components/service-carousel/service-carousel.component';

import { SlickCarouselModule } from 'ngx-slick-carousel';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StacksPageComponent } from './page/stacks-page/stacks-page.component';
import { MasonryGridComponent } from './components/masonry-grid/masonry-grid.component';
import { ContactVideoComponent } from './components/contact-video/contact-video.component';
import { PortfolioPageComponent } from './page/portfolio-page/portfolio-page.component';
import { FooterPageComponent } from './page/footer-page/footer-page.component';
import { LandingPageComponent } from './page/landing-page/landing-page.component';
import { CareerPageComponent } from './page/career-page/career-page.component';
import { BlogPageComponent } from './page/blog-page/blog-page.component';
import { UnderConstructionComponent } from './page/under-construction/under-construction.component';
import { BlogDetailPageComponent } from './page/blog-detail-page/blog-detail-page.component';

import { MatIconModule } from '@angular/material/icon';
import { EncodePipePipe } from './pipes/encode.pipe';
import { BlogDetailPageContentComponent } from './page/blog-detail-page/blog-detail-page-content/blog-detail-page-content.component';
import { BlogPageTagComponent } from './page/blog-page-tag/blog-page-tag.component';
import { SafeHtmlPipe } from './pipes/safehtml.pipe';

import { MatPaginatorModule } from '@angular/material/paginator';

@Injectable({
  providedIn: 'root',
})
@NgModule({
  declarations: [
    AppComponent,
    HeroPageComponent,
    ContactPageComponent,
    HeaderComponentComponent,
    NavbarComponent,
    CountUpDirective,
    ServicePageComponent,
    ServiceCarouselComponent,
    StacksPageComponent,
    MasonryGridComponent,
    ContactVideoComponent,
    PortfolioPageComponent,
    FooterPageComponent,
    LandingPageComponent,
    CareerPageComponent,
    BlogPageComponent,
    UnderConstructionComponent,
    BlogDetailPageComponent,
    EncodePipePipe,
    SafeHtmlPipe,
    BlogDetailPageContentComponent,
    BlogPageTagComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatCardModule,
    MatDividerModule,
    MatButtonModule,
    SlickCarouselModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSlideToggleModule,
    HttpClientModule,
    MatSnackBarModule,
    MatGridListModule,
    MatIconModule,
    MatPaginatorModule,
    ScullyLibModule,
  ],
  providers: [provideClientHydration()],
  bootstrap: [AppComponent],
})
export class AppModule {}
