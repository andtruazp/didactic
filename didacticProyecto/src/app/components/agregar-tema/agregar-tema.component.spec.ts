import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarTemaComponent } from './agregar-tema.component';

describe('AgregarTemaComponent', () => {
  let component: AgregarTemaComponent;
  let fixture: ComponentFixture<AgregarTemaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarTemaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarTemaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
