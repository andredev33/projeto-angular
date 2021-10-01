import { Component, OnInit, OnChanges } from '@angular/core';

import { FilmeService } from '../../core/services/filme.service';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.scss']
})
export class SeriesComponent implements OnInit, OnChanges {

  tvpopular: any;
  tvtoprated: any;
  tvlatest: any;
  tvon: any;
  tvairingtoday: any;

  constructor(private filmeService: FilmeService) {


  }

  ngOnInit(): void {
    this.getTvpopular();
    this.getTvTopRated();
    this.getTVOn();
    this.getTVAiringToday();
  }
  ngOnChanges() {

  }

  getTvpopular() {
    this.filmeService.buscarTVPopular().subscribe(data => {
      this.tvpopular = data.results;
      console.log(this.tvpopular);
    }, error => {
      console.log("Erro: ", error);
    })
  }

  getTvTopRated() {
    this.filmeService.buscarTVTopRated().subscribe(data => {
      this.tvtoprated = data.results;
      console.log(this.tvtoprated);
    }, error => {
      console.log("Erro: ", error);
    })
  }

  getTVLatest() {
    this.filmeService.bucarTVLatest().subscribe(data => {
      this.tvlatest = data.results;
    }, error => {
      console.log("Erro: ", error);
    })
  }

  getTVOn() {
    this.filmeService.bucarTVOn().subscribe(data => {
      this.tvon = data.results;
    }, error => {
      console.log("Erro: ", error);
    })
  }

  getTVAiringToday() {
    this.filmeService.bucarTVAiringToday().subscribe(data => {
      this.tvairingtoday = data.results;
    }, error => {
      console.log("Erro: ", error);
    })
  }

}
