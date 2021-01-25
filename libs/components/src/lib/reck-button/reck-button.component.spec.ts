import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReckButtonComponent } from './reck-button.component';

describe('ReckButtonComponent', () => {
  let component: ReckButtonComponent;
  let fixture: ComponentFixture<ReckButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReckButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReckButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
