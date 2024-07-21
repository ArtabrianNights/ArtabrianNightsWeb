import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Limo2Component } from './limo2.component';

describe('Limo2Component', () => {
  let component: Limo2Component;
  let fixture: ComponentFixture<Limo2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Limo2Component]
    });
    fixture = TestBed.createComponent(Limo2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
