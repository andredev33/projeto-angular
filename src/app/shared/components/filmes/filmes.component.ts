import { Component, OnInit } from '@angular/core';

import { FilmeService } from './../../../core/services/filme.service';

@Component({
  selector: 'app-filmes',
  templateUrl: './filmes.component.html',
  styleUrls: ['./filmes.component.scss']
})
export class FilmesComponent implements OnInit {

  popmovies: any;
  latestmovies: any;
  nowplayingmovies: any;
  topratedmovies: any;
  upcomingmovies: any;

  constructor(private filmeService: FilmeService) { }

  ngOnInit(): void {
    this.getFilmes();
    this.getLatestMovies();
    this.getNowPlaying();
    this.getUpComing();
    this.getTopRated();
  }

  getFilmes() {
    this.filmeService.buscaFilmesPop().subscribe(data => {
      this.popmovies = data.results;
      console.log(this.popmovies);
    }, error => {
      console.log("Erro: ", error);
    })
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
      this.latestmovies = data.results;
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

}
