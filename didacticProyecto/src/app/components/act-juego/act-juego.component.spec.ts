import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActJuegoComponent } from './act-juego.component';

describe('ActJuegoComponent', () => {
  let component: ActJuegoComponent;
  let fixture: ComponentFixture<ActJuegoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActJuegoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActJuegoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
