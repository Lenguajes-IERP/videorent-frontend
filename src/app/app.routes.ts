import { Routes } from '@angular/router';
import { PeliculaInsertComponent } from './peliculas/pelicula-insert/pelicula-insert.component';
import { PeliculaFormComponent } from './pelicula-form/pelicula-form.component'; // Import the new component
import { PeliculaInsertReactiveComponent } from './peliculas/pelicula-insert-reactive/pelicula-insert-reactive.component';
import { PeliculaInsertReactive2Component } from './peliculas/pelicula-insert-reactive2/pelicula-insert-reactive2.component';

export const routes: Routes = [
    { path: 'insertar-pelicula', component:  PeliculaInsertComponent},
    { path: 'pelicula-form', component: PeliculaFormComponent }, // Add the new route
    { path: 'pelicula-reactive', component: PeliculaInsertReactiveComponent }, // Add the new route
    { path: 'pelicula-reactive2', component: PeliculaInsertReactive2Component }
];
