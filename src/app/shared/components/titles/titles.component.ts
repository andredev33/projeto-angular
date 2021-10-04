import { ActivatedRoute } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-titles',
  templateUrl: './titles.component.html',
  styleUrls: ['./titles.component.scss']
})
export class TitlesComponent implements OnInit {

  @Input() titulos: any;
  @Input() tipo: any;

  constructor(private activatedRoute: ActivatedRoute) {

  }

  ngOnInit(): void {

  }

  tipoUrl() {
    if (this.tipo == "tv") {
      this.tipo = "movies"
      console.log('Tipo de: ', this.tipo);
    } else {
      this.tipo = "tv";
    }
  }



}
