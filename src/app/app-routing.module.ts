import { NgModule, Component } from '@angular/core';
import {RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { FilmesComponent } from './pages/filmes/filmes.component';
import { RecentesComponent } from './pages/recentes/recentes.component';
import { DetailsComponent } from './pages/details/details.component';
import { MyListComponent } from './pages/my-list/my-list.component';
import { SeriesComponent } from './pages/series/series.component';
import { SearchComponent } from './pages/search/search.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'details/:parametro', component: DetailsComponent},
  {path: 'series', component: SeriesComponent},
  {path: 'filmes', component: FilmesComponent},
  {path: 'recentes', component: RecentesComponent},
  {path: 'search/:id', component: SearchComponent},
  {path: 'home', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
