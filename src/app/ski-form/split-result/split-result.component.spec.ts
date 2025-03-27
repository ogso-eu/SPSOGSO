import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SplitResultComponent } from './split-result.component';

describe('SplitResultComponent', () => {
  let component: SplitResultComponent;
  let fixture: ComponentFixture<SplitResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SplitResultComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SplitResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
