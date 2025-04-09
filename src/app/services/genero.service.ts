import { Injectable } from '@angular/core';
import { Genero } from '../domain/genero.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

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
