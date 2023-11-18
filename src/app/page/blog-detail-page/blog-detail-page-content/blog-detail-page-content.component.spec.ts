import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogDetailPageContentComponent } from './blog-detail-page-content.component';

describe('BlogDetailPageContentComponent', () => {
  let component: BlogDetailPageContentComponent;
  let fixture: ComponentFixture<BlogDetailPageContentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BlogDetailPageContentComponent]
    });
    fixture = TestBed.createComponent(BlogDetailPageContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
