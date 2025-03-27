import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SplitTerrainComponent } from './split-terrain.component';

describe('SplitTerrainComponent', () => {
  let component: SplitTerrainComponent;
  let fixture: ComponentFixture<SplitTerrainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SplitTerrainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SplitTerrainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
