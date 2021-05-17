import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertDirectorComponent } from './insert-director.component';

describe('InsertDirectorComponent', () => {
  let component: InsertDirectorComponent;
  let fixture: ComponentFixture<InsertDirectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsertDirectorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertDirectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
