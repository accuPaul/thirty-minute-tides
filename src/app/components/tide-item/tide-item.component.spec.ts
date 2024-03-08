import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TideItemComponent } from './tide-item.component';

describe('TideItemComponent', () => {
  let component: TideItemComponent;
  let fixture: ComponentFixture<TideItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TideItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TideItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
