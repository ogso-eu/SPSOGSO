import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SplitSnowStepComponent } from './split-snow-step.component';

describe('SplitSnowStepComponent', () => {
  let component: SplitSnowStepComponent;
  let fixture: ComponentFixture<SplitSnowStepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SplitSnowStepComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SplitSnowStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
