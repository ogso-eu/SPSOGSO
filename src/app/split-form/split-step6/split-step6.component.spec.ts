import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SplitStep6Component } from './split-step6.component';

describe('SplitStep6Component', () => {
  let component: SplitStep6Component;
  let fixture: ComponentFixture<SplitStep6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SplitStep6Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SplitStep6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
