import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReckParallaxComponent } from './reck-parallax.component';

describe('ReckParallaxComponent', () => {
  let component: ReckParallaxComponent;
  let fixture: ComponentFixture<ReckParallaxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReckParallaxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReckParallaxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
