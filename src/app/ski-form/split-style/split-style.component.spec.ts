import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SplitStyleComponent } from './split-style.component';

describe('SplitStyleComponent', () => {
  let component: SplitStyleComponent;
  let fixture: ComponentFixture<SplitStyleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SplitStyleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SplitStyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
