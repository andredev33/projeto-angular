import { Component, OnInit } from '@angular/core';

import { FilmeService } from './../../../core/services/filme.service';
@Component({
  selector: 'app-recentes',
  templateUrl: './recentes.component.html',
  styleUrls: ['./recentes.component.scss']
})
export class RecentesComponent implements OnInit {

  upcomingmovies: any;

  constructor(private FilmeService: FilmeService) { }

  ngOnInit(): void {
    this.getUpComing();
  }

  getUpComing() {
    this.FilmeService.buscaFilmesUpComing().subscribe(data => {
      this.upcomingmovies = data.results;
    }, error => {
      console.log("Erro: ", error);
    })
  }

}
