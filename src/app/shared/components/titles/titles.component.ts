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




}
