import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { FilmeService } from './../../core/services/filme.service';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  detailsmovies: any;


  constructor(private activatedRoute: ActivatedRoute,
    private filmeService: FilmeService) { }

  ngOnInit(): void {
    const par = this.activatedRoute.snapshot.paramMap.get('parametro');
    const tipo = this.activatedRoute.snapshot.paramMap.get('tipo');
    console.log(par, "Detalhes:", tipo);
    this.filmeService.buscarDetails(par, tipo).subscribe(multsearch => {
      this.detailsmovies = multsearch;
    },
      (error) => console.error(error)
    );
  }

}
