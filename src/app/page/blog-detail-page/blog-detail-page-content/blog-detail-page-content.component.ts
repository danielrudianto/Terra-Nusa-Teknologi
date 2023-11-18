import {
  Component,
  HostListener,
  Input,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blog-detail-page-content',
  templateUrl: './blog-detail-page-content.component.html',
  styleUrls: ['./blog-detail-page-content.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class BlogDetailPageContentComponent {
  @Input('content') content!: string;

  constructor(private router: Router) {}

  @HostListener('click', ['$event'])
  onClick(e: any) {
    if (e.target.classList.contains('doc-type')) {
      const urlSegments = e.target.getAttribute('routerlink');
      this.router.navigate([urlSegments]);
    }
  }
}
