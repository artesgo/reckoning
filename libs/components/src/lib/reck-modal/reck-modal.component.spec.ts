import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReckModalComponent } from './reck-modal.component';

describe('ReckModalComponent', () => {
  let component: ReckModalComponent;
  let fixture: ComponentFixture<ReckModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReckModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReckModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
