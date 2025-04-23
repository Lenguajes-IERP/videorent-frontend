import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeliculaInsertReactive2Component } from './pelicula-insert-reactive2.component';

describe('PeliculaInsertReactive2Component', () => {
  let component: PeliculaInsertReactive2Component;
  let fixture: ComponentFixture<PeliculaInsertReactive2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PeliculaInsertReactive2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PeliculaInsertReactive2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
