import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'netflixclone';
  titulos: Array<any> = [{
    trailer: 'assets/videos/trailer_guardioes_da_galaxia_1080p.mp4',
    cover:'assets/images/guardios-da-galaxia.jpg',
    name:'Guardiões da galaxia',
    relevance: 66,
    age: 0,
    parts: 2,
    categories:['Épico', 'Filme de fantasia', 'Viagem no espaço']
  },{
    trailer: 'assets/videos/trailer_guardioes_da_galaxia_1080p.mp4',
    cover:'assets/images/guardios-da-galaxia.jpg',
    name:'Guardiões da galaxia 2',
    relevance: 77,
    age: 12,
    parts: 2,
    categories:['Épico', 'Filme de fantasia', 'Viagem no espaço']
  },{
    trailer: 'assets/videos/trailer_guardioes_da_galaxia_1080p.mp4',
    cover:'assets/images/guardios-da-galaxia.jpg',
    name:'Guardiões da galaxia 3',
    relevance: 88,
    age: 14,
    parts: 2,
    categories:['Épico', 'Filme de fantasia', 'Viagem no espaço']
  },{
    trailer: 'assets/videos/trailer_guardioes_da_galaxia_1080p.mp4',
    cover:'assets/images/guardios-da-galaxia.jpg',
    name:'Guardiões da galaxia 4',
    relevance: 99,
    age: 16,
    parts: 2,
    categories:['Épico', 'Filme de fantasia', 'Viagem no espaço']
  },{
    trailer: 'assets/videos/trailer_guardioes_da_galaxia_1080p.mp4',
    cover:'assets/images/guardios-da-galaxia.jpg',
    name:'Guardiões da galaxia 5',
    relevance: 99,
    age: 18,
    parts: 2,
    categories:['Épico', 'Filme de fantasia', 'Viagem no espaço']
  }
];
}
