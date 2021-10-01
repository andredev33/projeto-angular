import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-search',
  templateUrl: './list-search.component.html',
  styleUrls: ['./list-search.component.scss']
})
export class ListSearchComponent implements OnInit {

  @Input() titulos: any;

  constructor() { }

  ngOnInit(): void {
  }

}
