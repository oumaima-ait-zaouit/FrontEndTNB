import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TauxDetailsComponent } from './taux-details.component';

describe('TauxDetailsComponent', () => {
  let component: TauxDetailsComponent;
  let fixture: ComponentFixture<TauxDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TauxDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TauxDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
