import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Torneo5Component } from './torneo5.component';

describe('Torneo5Component', () => {
  let component: Torneo5Component;
  let fixture: ComponentFixture<Torneo5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Torneo5Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Torneo5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
