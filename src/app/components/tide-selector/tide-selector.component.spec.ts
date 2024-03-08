import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TideSelectorComponent } from './tide-selector.component';

describe('TideSelectorComponent', () => {
  let component: TideSelectorComponent;
  let fixture: ComponentFixture<TideSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TideSelectorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TideSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
