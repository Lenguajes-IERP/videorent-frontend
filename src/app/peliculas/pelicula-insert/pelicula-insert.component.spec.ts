import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeliculaInsertComponent } from './pelicula-insert.component';

describe('PeliculaInsertComponent', () => {
  let component: PeliculaInsertComponent;
  let fixture: ComponentFixture<PeliculaInsertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PeliculaInsertComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PeliculaInsertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
