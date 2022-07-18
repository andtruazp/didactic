import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Instructor1Component } from './instructor1.component';

describe('Instructor1Component', () => {
  let component: Instructor1Component;
  let fixture: ComponentFixture<Instructor1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Instructor1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Instructor1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
