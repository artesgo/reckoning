import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReckPopoverComponent } from './reck-popover.component';

describe('ReckPopoverComponent', () => {
  let component: ReckPopoverComponent;
  let fixture: ComponentFixture<ReckPopoverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReckPopoverComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReckPopoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
