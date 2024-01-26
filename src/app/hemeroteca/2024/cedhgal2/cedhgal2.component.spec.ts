import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cedhgal2Component } from './cedhgal2.component';

describe('Cedhgal2Component', () => {
  let component: Cedhgal2Component;
  let fixture: ComponentFixture<Cedhgal2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Cedhgal2Component]
    });
    fixture = TestBed.createComponent(Cedhgal2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
