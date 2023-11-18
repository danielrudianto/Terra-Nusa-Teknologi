import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactVideoComponent } from './contact-video.component';

describe('ContactVideoComponent', () => {
  let component: ContactVideoComponent;
  let fixture: ComponentFixture<ContactVideoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContactVideoComponent]
    });
    fixture = TestBed.createComponent(ContactVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
