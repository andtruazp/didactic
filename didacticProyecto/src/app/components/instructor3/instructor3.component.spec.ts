import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Instructor3Component } from './instructor3.component';

describe('Instructor3Component', () => {
  let component: Instructor3Component;
  let fixture: ComponentFixture<Instructor3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Instructor3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Instructor3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
