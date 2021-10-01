import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


import { IFilmeApi, IListaFilmes } from './../../shared/models/FilmeAPI.model';

@Injectable({
  providedIn: 'root'
})
export class FilmeService {

  lingua = 'pt-BR';
  regiao = 'BR';
  private pages: number;
  private searchmovies: any;
  private readonly apiURL ='https://api.themoviedb.org/3/';
  private readonly key = '5587269282cde005894b24ee3c0fab40';

  constructor(private http: HttpClient){
    this.pages = 1;
    this.searchmovies = '';
  }

  public buscaFilmesPop(): Observable<any> {
    const  url = `${this.apiURL}movie/popular?api_key=${this.key}&language=${this.lingua}&page=1`;
    return this.http.get<any>(url);
  }

  public buscaFilmesRecentes(): Observable<any> {
    const  url = `${this.apiURL}movie/latest?api_key=${this.key}&language=${this.lingua}&page=1`;
    return this.http.get<any>(url);
  }

  public buscaFilmesNowPlaying(): Observable<any> {
    const  url = `${this.apiURL}movie/now_playing?api_key=${this.key}&language=${this.lingua}&page=1`;
    return this.http.get<any>(url);
  }

  public buscaFilmesTopRated(): Observable<any> {
    const  url = `${this.apiURL}movie/top_rated?api_key=${this.key}&language=${this.lingua}&page=1`;
    return this.http.get<any>(url);
  }

  public buscaFilmesUpComing(): Observable<any> {
    const  url = `${this.apiURL}movie/upcoming?api_key=${this.key}&language=${this.lingua}&page=1`;
    return this.http.get<any>(url);
  }

  public buscarTVPopular(): Observable<any> {
    const url = `${this.apiURL}tv/popular?api_key=${this.key}&language=${this.lingua}&page=1`;
    return this.http.get<any>(url);
  }

  public buscarTVTopRated(): Observable<any> {
    const url = `${this.apiURL}tv/top_rated?api_key=${this.key}&language=${this.lingua}&page=1`;
    return this.http.get<any>(url);
  }

  public bucarTVLatest(): Observable<any>{
    const url = `${this.apiURL}tv/latest?api_key=${this.key}&language=${this.lingua}`;
    return this.http.get<any>(url);

  }

  public bucarTVOn(): Observable<any>{
    const url = `${this.apiURL}tv/on_the_air?api_key=${this.key}&language=${this.lingua}&page=1`;
    return this.http.get<any>(url);

  }

  public bucarTVAiringToday(): Observable<any>{
    const url = `${this.apiURL}tv/airing_today?api_key=${this.key}&language=${this.lingua}&page=1`;
    return this.http.get<any>(url);

  }

  bucarSearch(search: any): Observable<IListaFilmes>{
    const url = `${this.apiURL}search/multi?api_key=${this.key}&language=${this.lingua}&query=${search}&page=1&include_adult=false`;
    console.log('Services filme.services.ts pesquisa: ', url);
    return this.http.get<IListaFilmes>(url);

  }
  public pesquisa(): Observable<any>{
    const url = `${this.apiURL}search/multi?api_key=${this.key}&language=${this.lingua}&query=${this.searchmovies}&page=1&include_adult=false`;
    console.log('Services filme.services.ts pesquisa: ', url);
    return this.http.get<any>(url);
  }

  public buscarDetails(id: any): Observable<any>{
    const url = `${this.apiURL}tv/${id}?api_key=${this.key}&language=${this.lingua}`;
    console.log('Detalhes: ', url);
    return this.http.get<any>(url);
  }

  public buscarDetailsTv(id: any): Observable<any>{
    const url = `https://api.themoviedb.org/3/tv/{tv_id}?api_key=<<api_key>>&language=pt-BR`;
    console.log('Detalhes: ', url);
    return this.http.get<any>(url);
  }






}
