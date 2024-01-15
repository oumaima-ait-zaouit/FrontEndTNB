import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TauxListComponent } from './taux-list.component';

describe('TauxListComponent', () => {
  let component: TauxListComponent;
  let fixture: ComponentFixture<TauxListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TauxListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TauxListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
