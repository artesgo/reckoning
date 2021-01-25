import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReckFooterComponent } from './reck-footer.component';

describe('ReckFooterComponent', () => {
  let component: ReckFooterComponent;
  let fixture: ComponentFixture<ReckFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReckFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReckFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
