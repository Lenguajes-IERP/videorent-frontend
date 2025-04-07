import { Injectable } from '@angular/core';
import { Actor } from '../domain/actor.model';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActorService {
  private url:string = environment.API_URL;

  constructor(private http:HttpClient) { 

  }
  getActores():Observable<Actor[]> {
        return this.http.get<Actor[]>(`${this.url}actores`);
  }
}