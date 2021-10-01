import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

import { ApiTmdbService } from './api-tmdb.service';
@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  popmovies: any;
  private latestmovies: any;
  private nowplayingmovies: any;
  private topratedmovies: any;
  private upcomingmovies: any;

  constructor(private apiTmdbService: ApiTmdbService) { }

  getPopMovies(){
    this.apiTmdbService.buscaFilmesPop().subscribe(data => {
      this.popmovies = data.results;
      console.log('MOvies/ getpopMovies: ', this.popmovies);
    }, error => {
      console.log("Erro: ", error);
    })
  }
  getLatestMovies() {
    this.apiTmdbService.buscaFilmesPop().subscribe(data => {
      this.latestmovies = data.results;
      console.log(this.latestmovies);
    }, error => {
      console.log("Erro: ", error);
    })
    return this.latestmovies;
  }

  getNowPlaying() {
    this.apiTmdbService.buscaFilmesNowPlaying().subscribe(data => {
      this.nowplayingmovies = data.results;
      console.log(this.latestmovies);
    }, error => {
      console.log("Erro: ", error);
    })
    return this.nowplayingmovies;
  }

  getTopRated() {
    this.apiTmdbService.buscaFilmesTopRated().subscribe(data => {
      this.topratedmovies = data.results;
      console.log(this.topratedmovies);
    }, error => {
      console.log("Erro: ", error);
    })
    return this.topratedmovies;
  }

  getUpComing() {
    this.apiTmdbService.buscaFilmesUpComing().subscribe(data => {
      this.upcomingmovies = data.results;
      console.log(this.upcomingmovies);
    }, error => {
      console.log("Erro: ", error);
    })
    return this.upcomingmovies;
  }




}
