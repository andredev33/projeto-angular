import { Imagens } from '../../shared/models/placeholder.model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
 api = "https://jsonplaceholder.typicode.com/photos";
constructor(private http: HttpClient){ }
public getPhotos(): Observable<Imagens>{
  console.log("A api: ", this.api);
 return this.http.get<Imagens>(this.api);

}

}
