import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Limo1Component } from './limo1.component';

describe('Limo1Component', () => {
  let component: Limo1Component;
  let fixture: ComponentFixture<Limo1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Limo1Component]
    });
    fixture = TestBed.createComponent(Limo1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
