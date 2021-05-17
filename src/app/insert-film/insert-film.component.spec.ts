import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertFilmComponent } from './insert-film.component';

describe('InsertFilmComponent', () => {
  let component: InsertFilmComponent;
  let fixture: ComponentFixture<InsertFilmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsertFilmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertFilmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
