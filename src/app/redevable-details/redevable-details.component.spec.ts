import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedevableDetailsComponent } from './redevable-details.component';

describe('RedevableDetailsComponent', () => {
  let component: RedevableDetailsComponent;
  let fixture: ComponentFixture<RedevableDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RedevableDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RedevableDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
