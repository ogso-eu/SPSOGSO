import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SplitStep1Component } from './split-step1.component';

describe('SplitStep1Component', () => {
  let component: SplitStep1Component;
  let fixture: ComponentFixture<SplitStep1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SplitStep1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SplitStep1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
