import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment.development';
import { Blog, WindowsSize } from '../blog-page/blog-page.component';
import { getWindow } from 'ssr-window';

@Component({
  selector: 'app-blog-page-tag',
  templateUrl: './blog-page-tag.component.html',
  styleUrls: ['./blog-page-tag.component.css'],
})
export class BlogPageTagComponent {
  blogs: Blog[] = [];
  isLoading: boolean = true;
  windowsSize: WindowsSize = WindowsSize.Desktop;
  page: number = 1;
  total: number = 20;

  constructor(
    private http: HttpClient,
    private snackBar: MatSnackBar,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    getWindow().onresize = () => {
      this.checkWindowSize();
    };

    this.checkWindowSize();

    this.route.queryParams.subscribe((params) => {
      this.page = parseInt(params['page']) || 1;
      this.fetchBlogs(this.route.snapshot.params['tag']);
    });
  }

  checkWindowSize() {
    const width = getWindow().innerWidth;
    if (width <= 768) {
      this.windowsSize = WindowsSize.Mobile;
    } else if (width <= 1024) {
      this.windowsSize = WindowsSize.Tablet;
    } else {
      this.windowsSize = WindowsSize.Desktop;
    }
  }

  fetchBlogs(tag: string) {
    this.isLoading = true;
    this.http
      .get(`${environment.apiUrl}/blog/category/${tag}?page=${this.page}`)
      .subscribe({
        next: (data: any) => {
          this.blogs = data.blogs;
          this.total = data.count;
        },
        error: (error) => {
          console.error(`[error]: Error ${error.toString()}`);
          this.snackBar.open(
            'Kesalahan pada server. Mohon coba kembali beberapa saat lagi.',
            'Tutup',
            {
              duration: 3000,
            }
          );
        },
      })
      .add(() => {
        this.isLoading = false;
      });
  }

  onPageChange(event: any) {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: {
        page: event.pageIndex + 1,
      },
      queryParamsHandling: 'merge',
    });
  }

  NavigateToHome() {
    this.router.navigate(['/Blog']);
  }
}
