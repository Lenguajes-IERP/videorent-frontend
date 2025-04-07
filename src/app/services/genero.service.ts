import { Injectable } from '@angular/core';
import { Genero } from '../domain/genero.model';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GeneroService {
  private url:string = environment.API_URL;

  constructor(private http:HttpClient) { 

  }
  getGeneros():Observable<Genero[]> {
        return this.http.get<Genero[]>(`${this.url}generos`);
  }
}
