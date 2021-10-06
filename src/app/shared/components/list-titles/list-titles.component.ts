import { Router } from '@angular/router';
import { AfterContentInit, Component, HostListener, Input, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-titles',
  templateUrl: './list-titles.component.html',
  styleUrls: ['./list-titles.component.scss']
})
export class ListTitlesComponent implements OnInit{

  constructor(private Router: Router){}

  @Input() title!: String;
  @Input() titulos!: any;
  @Input() tipo!: String;
  slideConfig = {
    "slidesToShow": 6,
    "slidesToScroll": 1,
    "dots": false,
    "arrows": false,
    "infinite": false,
    "accessibility": true,
    "adaptiveHeight": true,
    "focusOnSelect": true
  };


  ngOnInit(){

    this.tipoUrl();

  }

  tipoUrl() {
    if (this.tipo == "tv") {
      this.tipo = "tv"
      console.log('Tipo de: ', this.tipo);
    } else {
      this.tipo = "movie";
    }
  }


}

