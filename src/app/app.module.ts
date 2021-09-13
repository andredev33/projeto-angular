import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SlickCarouselModule} from 'ngx-slick-carousel';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './shared/components/nav-bar/nav-bar.component';
import { FullBannerComponent } from './shared/components/full-banner/full-banner.component';
import { ListTitlesComponent } from './shared/components/list-titles/list-titles.component';
import { TitlesComponent } from './shared/components/titles/titles.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import {HttpClientModule} from '@angular/common/http';
import { CarouselComponent } from './shared/components/carousel/carousel.component';
import { HomeComponent } from './home/home.component';
import { SeriesComponent } from './shared/components/series/series.component';
import { FilmesComponent } from './shared/components/filmes/filmes.component';
import { RecentesComponent } from './shared/components/recentes/recentes.component';
import { SliderComponent } from './shared/components/slider/slider.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FullBannerComponent,
    ListTitlesComponent,
    TitlesComponent,
    FooterComponent,
    CarouselComponent,
    HomeComponent,
    SeriesComponent,
    FilmesComponent,
    RecentesComponent,
    SliderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SlickCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
