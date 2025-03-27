import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SplitStep2Component } from './split-step2.component';

describe('SplitStep2Component', () => {
  let component: SplitStep2Component;
  let fixture: ComponentFixture<SplitStep2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SplitStep2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SplitStep2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
