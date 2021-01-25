import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReckSelectComponent } from './reck-select.component';

describe('ReckSelectComponent', () => {
  let component: ReckSelectComponent;
  let fixture: ComponentFixture<ReckSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReckSelectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReckSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
