import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-full-banner',
  templateUrl: './full-banner.component.html',
  styleUrls: ['./full-banner.component.scss']
})
export class FullBannerComponent implements OnInit {

  @Input() titulos: any;


  constructor() { }

  ngOnInit(): void {
    console.log('logaquiii', this.titulos);
  }

}
