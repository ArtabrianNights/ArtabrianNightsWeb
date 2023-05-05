import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Torneo2Component } from './torneo2.component';

describe('Torneo2Component', () => {
  let component: Torneo2Component;
  let fixture: ComponentFixture<Torneo2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Torneo2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Torneo2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
