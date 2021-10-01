import { AppComponent } from './../../../app.component';
import { Component, Inject, OnInit, Output, Renderer2 } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormControl } from '@angular/forms';

import { DOCUMENT } from '@angular/common';
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  queryField = new FormControl();
  contrast: Contrast = 'off-contrast';
  fontSize: number = 16;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    @Inject(DOCUMENT) private document: Document,
    private renderer: Renderer2
  ) { }

  ngOnInit(): void {
    this.initializeContrast();
  }

  switchContrast() {
    this.document.body.classList.replace(this.contrast, this.contrast === 'on-contrast' ? (this.contrast = 'off-contrast') : (this.contrast = 'on-contrast'));
  }

  initializeContrast = (): void =>
    this.renderer.addClass(this.document.body, this.contrast);

  aumentarFonte() {
    if(this.fontSize == 16){
      this.fontSize = 18;
    }
    else if(this.fontSize == 18){
      this.fontSize = 20;
    }
    else if(this.fontSize < 16){
      this.fontSize += 2;
    }
  }

  restaurarFonte(){
    this.fontSize = 16;
  }

  diminuirFonte() {
    if(this.fontSize == 16){
      this.fontSize = 14;
    }
    else if(this.fontSize == 14){
      this.fontSize = 12;
    }
    else if(this.fontSize > 16){
      this.fontSize -= 2;
    }

  }

  navBarSearch(event: any) {
    if(!this.queryField.value || this.queryField.value == " "){

    }else{
      this.router.navigateByUrl(`/search/${this.queryField.value}`);
    }
  }

}

export type Contrast = 'on-contrast' | 'off-contrast';
