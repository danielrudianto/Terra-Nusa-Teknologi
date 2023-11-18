import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogPageTagComponent } from './blog-page-tag.component';

describe('BlogPageTagComponent', () => {
  let component: BlogPageTagComponent;
  let fixture: ComponentFixture<BlogPageTagComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BlogPageTagComponent]
    });
    fixture = TestBed.createComponent(BlogPageTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
