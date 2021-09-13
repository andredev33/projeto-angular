import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FilmeService {

  lingua = 'pt-BR';
  regiao = 'BR';
  private readonly apiURL ='https://api.themoviedb.org/3/';
  private key = '5587269282cde005894b24ee3c0fab40';

  constructor(private http: HttpClient) { }

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



}
