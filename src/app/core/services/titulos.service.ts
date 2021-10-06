import { Injectable } from '@angular/core';

import { FilmeService } from './filme.service';
@Injectable({
  providedIn: 'root'
})
export class TitulosService {

  popmovies: any;
  latestmovies: any;
  nowplayingmovies: any;
  topratedmovies: any;
  upcomingmovies: any;
  tvpopular: any;

  constructor(private filmeService: FilmeService) { }

  ngOnInit(): void { }


  getFilmes(){
    this.filmeService.buscaFilmesPop().subscribe(data => {
      this.popmovies = data.results;
      console.log(this.popmovies);
    }, error => {
      console.log("Erro: ", error);
    })
    const titulo = this.popmovies;

  }

  getLatestMovies() {
    this.filmeService.buscaFilmesPop().subscribe(data => {
      this.latestmovies = data.results;
      console.log(this.latestmovies);
    }, error => {
      console.log("Erro: ", error);
    })
  }

  getNowPlaying() {
    this.filmeService.buscaFilmesNowPlaying().subscribe(data => {
      this.nowplayingmovies = data.results;
      console.log(this.latestmovies);
    }, error => {
      console.log("Erro: ", error);
    })
  }

  getTopRated() {
    this.filmeService.buscaFilmesTopRated().subscribe(data => {
      this.topratedmovies = data.results;
      console.log(this.topratedmovies);
    }, error => {
      console.log("Erro: ", error);
    })
  }

  getUpComing() {
    this.filmeService.buscaFilmesUpComing().subscribe(data => {
      this.upcomingmovies = data.results;
      console.log(this.upcomingmovies);
    }, error => {
      console.log("Erro: ", error);
    })
  }

  getTvpopular() {
    this.filmeService.buscarTVPopular().subscribe(data => {
      this.tvpopular = data.results;
      console.log(this.tvpopular);
    }, error => {
      console.log("Erro: ", error);
    })
  }
}
