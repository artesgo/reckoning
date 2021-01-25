import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReckRadioComponent } from './reck-radio.component';

describe('ReckRadioComponent', () => {
  let component: ReckRadioComponent;
  let fixture: ComponentFixture<ReckRadioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReckRadioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReckRadioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
