import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CareerDetailPageComponent } from './career-detail-page.component';

describe('CareerDetailPageComponent', () => {
  let component: CareerDetailPageComponent;
  let fixture: ComponentFixture<CareerDetailPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CareerDetailPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CareerDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
