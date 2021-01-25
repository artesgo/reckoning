import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReckCheckboxComponent } from './reck-checkbox.component';

describe('ReckCheckboxComponent', () => {
  let component: ReckCheckboxComponent;
  let fixture: ComponentFixture<ReckCheckboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReckCheckboxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReckCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
