import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertarLinkComponent } from './insertar-link.component';

describe('InsertarLinkComponent', () => {
  let component: InsertarLinkComponent;
  let fixture: ComponentFixture<InsertarLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsertarLinkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertarLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
