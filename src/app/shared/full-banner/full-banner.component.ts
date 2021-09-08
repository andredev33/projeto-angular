import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-full-banner',
  templateUrl: './full-banner.component.html',
  styleUrls: ['./full-banner.component.scss']
})
export class FullBannerComponent implements OnInit {
@Input() moviesbanner: any;


  constructor() { }

  ngOnInit(): void {
  }

}
