import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Actor } from '../../domain/actor.model';
import { Genero } from '../../domain/genero.model';
import { PeliculaService } from '../../services/pelicula.service';
import { ActorService } from '../../services/actor.service';
import { GeneroService } from '../../services/genero.service';
@Component({
  selector: 'app-pelicula-insert-reactive2',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './pelicula-insert-reactive2.component.html',
  styleUrl: './pelicula-insert-reactive2.component.css'
})
export class PeliculaInsertReactive2Component implements OnInit{
  peliculaForm!:FormGroup;
  generos: Genero[] = [];
  actoresDisponibles: Actor[] = [];
  actoresPelicula: Actor[] = [];
  selectedActorId: number | undefined;

  constructor(private fb:FormBuilder,
    private peliculaService:PeliculaService,
    private actorService:ActorService,
    private generoService:GeneroService
  ){

  }
  ngOnInit(): void {
    this.peliculaForm = this.fb.group({
      titulo: ['', Validators.required],
      subtitulada: [false],
      estreno: [false],
      genero: [null, Validators.required], // Usa un null para inicializar
      actores: [[],Validators.required] // arreglo vacío de actores de la película
    });

    this.loadGeneros();
    this.loadActores();
    
  }
  loadGeneros() {
    this.generoService.getGeneros().subscribe({
      next: (data) => this.generos = data,
      error: (error) => console.error('Error loading generos:', error)
    });
    //console.log("generos", this.generos);
  }

  loadActores() {
    this.actorService.getActores().subscribe({
      next: (data) => this.actoresDisponibles = data,
      error: (error) => console.error('Error loading actores:', error)
    });
  }

  onSubmit() {
    if (this.peliculaForm.valid) {
      console.log('Form Submitted! Data:', this.toJson());
      this.peliculaService.guardarPelicula(this.toJson()).subscribe({
        next: (response) => console.log('Pelicula saved:', response),
        error: (error) => console.error('Error saving pelicula:', error)
      });
    } else {
      console.log('Form is invalid');
    }
  }
   
  toJson(): Object {
    console.log(this.peliculaForm.value.genero.id);
    const formValue = this.peliculaForm.value;
    let actores: { actorId: number }[] = [];
    actores = formValue.actores.map((actor: { id: number }) => 
          ({
               actorId: actor.id
           }));
    // retorno del objeto construido directamente   
    return {
        titulo: formValue.titulo, 
        subtitulada: formValue.subtitulada,
        estreno: formValue.estreno,
        genero: {
            generoId: formValue.genero
        },
        actores
    };
    
 }

  onActorSelectionChange(event: Event): void {
    // Target the select element and get its value
    const selectElement = event.target as HTMLSelectElement;
    // When using [ngValue], the selected value might be accessed like this,
    this.selectedActorId  = parseInt(selectElement.value);
    console.log('Selected ID on change:', this.selectedActorId);
  }

  addActor() {
    if (this.selectedActorId) {
      const currentActors = this.peliculaForm.get('actores')?.value as Actor[];
      const actorToAdd = this.actoresDisponibles.find(actor => actor.id === this.selectedActorId);

      if (actorToAdd && !currentActors.some(actor => actor.id === this.selectedActorId)) {
        this.actoresPelicula.push(actorToAdd);
        this.peliculaForm.get('actores')?.setValue([...currentActors, actorToAdd]);
      }
     // console.log(this.actoresPelicula);
    }
  }
  removeActor(actorIdToRemove?: number) {
    
    const currentActors = this.peliculaForm.get('actores')?.value as Actor[];
    const updatedActors = currentActors.filter(actor => actor.id !== actorIdToRemove);
    this.actoresPelicula = this.actoresPelicula.filter(actor => actor.id !== actorIdToRemove)
    this.peliculaForm.get('actores')?.setValue(updatedActors);
  }
}
