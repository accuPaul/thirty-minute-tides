import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TideStationComponent } from './tide-station.component';

describe('TideStationComponent', () => {
  let component: TideStationComponent;
  let fixture: ComponentFixture<TideStationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TideStationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TideStationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
