import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Torneo1Component } from './torneo1.component';

describe('Torneo1Component', () => {
  let component: Torneo1Component;
  let fixture: ComponentFixture<Torneo1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Torneo1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Torneo1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
