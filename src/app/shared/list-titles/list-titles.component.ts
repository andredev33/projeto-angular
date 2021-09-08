import { IListaFilmes } from './../../models/FilmeAPI.model';
import { Imagens } from './../../models/placeholder.model';
import { CrudService } from './../../services/crud.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-titles',
  templateUrl: './list-titles.component.html',
  styleUrls: ['./list-titles.component.scss']
})
export class ListTitlesComponent implements OnInit {
  @Input() title!: String;
  @Input() titulos!: any;

  constructor( ) { }

  ngOnInit(): void {
  }

}
