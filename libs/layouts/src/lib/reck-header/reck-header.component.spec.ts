import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReckHeaderComponent } from './reck-header.component';

describe('ReckHeaderComponent', () => {
  let component: ReckHeaderComponent;
  let fixture: ComponentFixture<ReckHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReckHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReckHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
