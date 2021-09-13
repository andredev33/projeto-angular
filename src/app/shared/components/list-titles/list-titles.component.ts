import { AfterContentInit, Component, HostListener, Input, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-titles',
  templateUrl: './list-titles.component.html',
  styleUrls: ['./list-titles.component.scss']
})
export class ListTitlesComponent implements OnInit{

  sticky = false;
  @Input() title!: String;
  @Input() titulos!: any;
  
  slideConfig = {
    "slidesToShow": 6,
    "slidesToScroll": 3,
    "dots": true,
    "infinite": false,
    "responsive": [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };


  ngOnInit(){}



}

/*@HostListener('window:scroll', ['$event'])
  handlesScroll(){
    const windowScroll = window.pageYOffset;

    if( windowScroll > this.header.nativeElement.offsetHeight){
      this.sticky = true;
    } else {
      this.sticky = false;
    }
  }*/
