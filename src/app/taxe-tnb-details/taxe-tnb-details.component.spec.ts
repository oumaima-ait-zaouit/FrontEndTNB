import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxeTnbDetailsComponent } from './taxe-tnb-details.component';

describe('TaxeTnbDetailsComponent', () => {
  let component: TaxeTnbDetailsComponent;
  let fixture: ComponentFixture<TaxeTnbDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaxeTnbDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TaxeTnbDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
