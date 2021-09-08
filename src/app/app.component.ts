import { FilmeService } from './services/filme.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  popmovies: any;
  latestmovies: any;
  nowplayingmovies: any;
  topratedmovies: any;
  upcomingmovies: any;
  tvpopular: any;

  constructor(private filmeService: FilmeService) {

  }

  ngOnInit() {
    this.getFilmes();
    this.getUpComing();
    this.getTopRated();
    this.getTvpopular();
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

  getTvpopular() {
    this.filmeService.buscarTVPopular().subscribe(data => {
      this.tvpopular = data.results;
      console.log(this.tvpopular);
    }, error => {
      console.log("Erro: ", error);
    })
  }

}
