import { ActivatedRoute, Route } from '@angular/router';
import { FormControl } from '@angular/forms';
import { Component, OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, Input } from '@angular/core';

import { FilmeService } from '../../core/services/filme.service';
import { Subscriber } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  @Input() search: any;
  pages: any;
  par: any;


  constructor(
    private FilmeService: FilmeService,
    private activatedRoute: ActivatedRoute
  ) {

  }

  ngOnInit() {

    this.activatedRoute.params.subscribe(params =>{
    this.FilmeService.bucarSearch(params.id).subscribe(multsearch => {
      this.search = multsearch.results;
      this.pages = multsearch.total_pages;

    },
      (error) => console.error(error)
    );
    });
  }

  onSearch($event: any) {


  }



}
