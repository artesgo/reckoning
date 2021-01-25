import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReckSlidesComponent } from './reck-slides.component';

describe('ReckSlidesComponent', () => {
  let component: ReckSlidesComponent;
  let fixture: ComponentFixture<ReckSlidesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReckSlidesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReckSlidesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
