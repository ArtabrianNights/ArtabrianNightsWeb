import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Torneo3Component } from './torneo3.component';

describe('Torneo3Component', () => {
  let component: Torneo3Component;
  let fixture: ComponentFixture<Torneo3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Torneo3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Torneo3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
