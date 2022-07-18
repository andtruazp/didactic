import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActLecturaComponent } from './act-lectura.component';

describe('ActLecturaComponent', () => {
  let component: ActLecturaComponent;
  let fixture: ComponentFixture<ActLecturaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActLecturaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActLecturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
