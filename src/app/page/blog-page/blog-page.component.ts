import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.development';
import { getWindow } from 'ssr-window';

interface BlogGroup {
  name: string;
  blogs: Blog[];
}

export interface Blog {
  id: number;
  title: string;
  displayTitle: string;
  subtitle: string;
  words: number;
  created_date: string;
}

export enum WindowsSize {
  Mobile = 1,
  Tablet = 2,
  Desktop = 3,
}

@Component({
  selector: 'app-blog-page',
  templateUrl: './blog-page.component.html',
  styleUrls: ['./blog-page.component.css'],
})
export class BlogPageComponent implements OnInit {
  blogs: BlogGroup[] = [];
  isLoading: boolean = true;
  windowsSize: WindowsSize = WindowsSize.Desktop;

  constructor(
    private http: HttpClient,
    private snackBar: MatSnackBar,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.fetchBlogs();

    getWindow().onresize = () => {
      this.checkWindowSize();
    };

    this.checkWindowSize();
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

  fetchBlogs() {
    console.log(environment.apiUrl);
    this.isLoading = true;
    this.http
      .get(`${environment.apiUrl}/blog`)
      .subscribe({
        next: (data: any) => {
          this.blogs = data;
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

  NavigateToTag(tag: string) {
    // Navigate to /Blog/Tag
    // Give query parameter of page = 1
    // Give parameter of tag = tag

    this.router.navigate(
      ['/Blog/Tag', encodeURIComponent(tag.replaceAll(' ', '-'))],
      {
        queryParams: {
          page: 1,
        },
      }
    );
  }
}
