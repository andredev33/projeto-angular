import { FilmeService } from '../../core/services/filme.service';
import { Component, OnInit } from '@angular/core';


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

  constructor(private FilmeService: FilmeService) {
      this.getUpComing();
      this.getPopMovies();
      this.getTopRated();

  }

  ngOnInit(): void {

  }

  getPopMovies(){
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


}
