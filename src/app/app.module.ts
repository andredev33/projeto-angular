import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { SlickCarouselModule} from 'ngx-slick-carousel';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './shared/components/nav-bar/nav-bar.component';
import { FullBannerComponent } from './shared/components/full-banner/full-banner.component';
import { ListTitlesComponent } from './shared/components/list-titles/list-titles.component';
import { TitlesComponent } from './shared/components/titles/titles.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { CarouselComponent } from './shared/components/carousel/carousel.component';
import { HomeComponent } from './pages/home/home.component';
import { SeriesComponent } from './pages/series/series.component';
import { FilmesComponent } from './pages/filmes/filmes.component';
import { RecentesComponent } from './pages/recentes/recentes.component';
import { SliderComponent } from './shared/components/slider/slider.component';
import { SearchComponent } from './pages/search/search.component';
import { MyListComponent } from './pages/my-list/my-list.component';
import { FilterPipe } from './shared/pipes/filter.pipe';
import { ListSearchComponent } from './shared/components/list-search/list-search.component';
import { CardDetailsComponent } from './shared/components/card-details/card-details.component';
import { DetailsComponent } from './pages/details/details.component';
import { AccessibilityComponent } from './shared/components/accessibility/accessibility.component';
import { CadastroMoviesComponent } from './pages/cadastro-movies/cadastro-movies.component';

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
    SliderComponent,
    SearchComponent,
    MyListComponent,
    FilterPipe,
    ListSearchComponent,
    CardDetailsComponent,
    DetailsComponent,
    AccessibilityComponent,
    CadastroMoviesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SlickCarouselModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
