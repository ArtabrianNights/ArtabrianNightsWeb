import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Torneo4Component } from './torneo4.component';

describe('Torneo4Component', () => {
  let component: Torneo4Component;
  let fixture: ComponentFixture<Torneo4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Torneo4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Torneo4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
