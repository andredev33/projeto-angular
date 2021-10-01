import { Component, OnInit } from '@angular/core';

import { FilmeService } from '../../core/services/filme.service';
@Component({
  selector: 'app-recentes',
  templateUrl: './recentes.component.html',
  styleUrls: ['./recentes.component.scss']
})
export class RecentesComponent implements OnInit {

  upcomingmovies: any;
  tvon: any;

  constructor(private FilmeService: FilmeService) { }

  ngOnInit(): void {
    this.getUpComing();
    this.getTVOn();
  }

  getUpComing() {
    this.FilmeService.buscaFilmesUpComing().subscribe(data => {
      this.upcomingmovies = data.results;
    }, error => {
      console.log("Erro: ", error);
    })
  }

  getTVOn() {
    this.FilmeService.bucarTVOn().subscribe(data => {
      this.tvon = data.results;
    }, error => {
      console.log("Erro: ", error);
    })
  }

}
