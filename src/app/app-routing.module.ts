import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { FilmesComponent } from './shared/components/filmes/filmes.component';
import { RecentesComponent } from './shared/components/recentes/recentes.component';
import { SeriesComponent } from './shared/components/series/series.component';

const routes: Routes = [
  {path: 'series', component: SeriesComponent},
  {path: 'filmes', component: FilmesComponent},
  {path: 'recentes', component: RecentesComponent},
  {path: '', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
