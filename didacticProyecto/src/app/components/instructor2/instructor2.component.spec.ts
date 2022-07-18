import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Instructor2Component } from './instructor2.component';

describe('Instructor2Component', () => {
  let component: Instructor2Component;
  let fixture: ComponentFixture<Instructor2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Instructor2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Instructor2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
