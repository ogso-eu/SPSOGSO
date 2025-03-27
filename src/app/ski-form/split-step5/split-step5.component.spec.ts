import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SplitStep5Component } from './split-step5.component';

describe('SplitStep5Component', () => {
  let component: SplitStep5Component;
  let fixture: ComponentFixture<SplitStep5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SplitStep5Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SplitStep5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
