import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HemerotecaComponent } from './hemeroteca.component';

describe('HemerotecaComponent', () => {
  let component: HemerotecaComponent;
  let fixture: ComponentFixture<HemerotecaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HemerotecaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HemerotecaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
