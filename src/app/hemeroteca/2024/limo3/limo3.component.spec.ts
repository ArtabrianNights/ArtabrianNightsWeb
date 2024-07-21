import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Limo3Component } from './limo3.component';

describe('Limo3Component', () => {
  let component: Limo3Component;
  let fixture: ComponentFixture<Limo3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Limo3Component]
    });
    fixture = TestBed.createComponent(Limo3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
