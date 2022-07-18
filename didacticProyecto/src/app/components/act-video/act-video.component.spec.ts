import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActVideoComponent } from './act-video.component';

describe('ActVideoComponent', () => {
  let component: ActVideoComponent;
  let fixture: ComponentFixture<ActVideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActVideoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
