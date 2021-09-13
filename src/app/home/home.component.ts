import { Component, OnInit } from '@angular/core';


import { FilmeService } from './../core/services/filme.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  popmovies: any;
  latestmovies: any;
  nowplayingmovies: any;
  topratedmovies: any;
  upcomingmovies: any;
  tvpopular: any;

  constructor(private FilmeService: FilmeService){

  }

  ngOnInit(){

    this.getFilmes();
    this.getTopRated();
    this.getTvpopular();
    this.getUpComing();

  }
  getFilmes(){
    this.FilmeService.buscaFilmesPop().subscribe(data => {
      this.popmovies = data.results;
      console.log(this.popmovies);
    }, error => {
      console.log("Erro: ", error);
    })
    const titulo = this.popmovies;

  }

  getLatestMovies() {
    this.FilmeService.buscaFilmesPop().subscribe(data => {
      this.latestmovies = data.results;
      console.log(this.latestmovies);
    }, error => {
      console.log("Erro: ", error);
    })
  }

  getNowPlaying() {
    this.FilmeService.buscaFilmesNowPlaying().subscribe(data => {
      this.nowplayingmovies = data.results;
      console.log(this.latestmovies);
    }, error => {
      console.log("Erro: ", error);
    })
  }

  getTopRated() {
    this.FilmeService.buscaFilmesTopRated().subscribe(data => {
      this.topratedmovies = data.results;
      console.log(this.topratedmovies);
    }, error => {
      console.log("Erro: ", error);
    })
  }

  getUpComing() {
    this.FilmeService.buscaFilmesUpComing().subscribe(data => {
      this.upcomingmovies = data.results;
      console.log(this.upcomingmovies);
    }, error => {
      console.log("Erro: ", error);
    })
  }

  getTvpopular() {
    this.FilmeService.buscarTVPopular().subscribe(data => {
      this.tvpopular = data.results;
      console.log(this.tvpopular);
    }, error => {
      console.log("Erro: ", error);
    })
  }

}
