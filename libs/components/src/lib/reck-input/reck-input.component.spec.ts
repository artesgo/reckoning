import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReckInputComponent } from './reck-input.component';

describe('ReckInputComponent', () => {
  let component: ReckInputComponent;
  let fixture: ComponentFixture<ReckInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReckInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReckInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
