import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment'; // Import environment


@Injectable({
  providedIn: 'root'
})
export class PeliculaService {

  private apiUrl = `${environment.API_URL}peliculas`; // Use environment variable for API URL

  constructor(private http: HttpClient) { }

  // Method to save a new pelicula
  guardarPelicula(pelicula: any): Observable<any> { // Use 'any' or the Pelicula interface
    return this.http.post<any>(this.apiUrl, pelicula);
  }

  // Add other methods as needed (e.g., getPeliculas, getPeliculaById, updatePelicula, deletePelicula)

}