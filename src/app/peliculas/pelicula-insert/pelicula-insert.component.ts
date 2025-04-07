import { Component, OnInit } from '@angular/core';
import { GeneroService } from '../../services/genero.service';
import { Genero } from '../../domain/genero.model';
import { ActorService } from '../../services/actor.service';
import { Actor } from '../../domain/actor.model';
// el módulo provideHttpClient debe estar importado en app.config
import { CommonModule } from '@angular/common';

// para conectar un elemento form (<select>, <input>, etc) con una property en el componente
// When the user changes the value in the form element, the component's property updates, and vice versa
import { FormsModule } from '@angular/forms';  // incluirlo en los imports

@Component({
  selector: 'app-pelicula-insert',
  imports: [CommonModule, FormsModule],
  standalone:true,
  templateUrl: './pelicula-insert.component.html',
  styleUrl: './pelicula-insert.component.css'
})
export class PeliculaInsertComponent implements OnInit{
  generos:Genero[]=[];
  actores:Actor[]=[];

  actoresPelicula: Actor[] = []; // Array de los actores seleccionados para la película
  nuevoActor: number | undefined; // ID del actor por agregar (SELECT)

    
  constructor(private generoService: GeneroService,
    private actorService:ActorService){
    
  }
  ngOnInit(): void {
    this.generoService.getGeneros().subscribe({
      next: (data) => this.generos = data,
      error: (err) => console.error(err)
    });

    this.actorService.getActores().subscribe({
      next: (data) => this.actores = data,
      error: (err) => console.error(err)
    });
  }
  
  agregarActor(): void {
    if (this.nuevoActor) {
      let actorPorAgregar:Actor | undefined;
      this.actores.forEach((actor) => {
        let id:number=Number(this.nuevoActor);
          if(actor.id===id && !this.actoresPelicula.includes(actor))
            this.actoresPelicula.push(actor);
      });
      this.nuevoActor = undefined; // Limpia la selección
    }
  }
  removerActor(actor: Actor): void {
    this.actoresPelicula = this.actoresPelicula.filter(a => a.id !== actor.id);
  }
}
