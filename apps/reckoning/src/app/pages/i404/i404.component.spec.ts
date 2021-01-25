import { ComponentFixture, TestBed } from '@angular/core/testing';

import { I404Component } from './i404.component';

describe('I404Component', () => {
  let component: I404Component;
  let fixture: ComponentFixture<I404Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ I404Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(I404Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
