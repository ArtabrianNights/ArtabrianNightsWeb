import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Torneo6Component } from './torneo6.component';

describe('Torneo6Component', () => {
  let component: Torneo6Component;
  let fixture: ComponentFixture<Torneo6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Torneo6Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Torneo6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
