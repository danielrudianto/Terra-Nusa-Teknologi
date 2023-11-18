import { HttpClient } from '@angular/common/http';
import {
  AfterViewInit,
  Component,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment.development';
import { Location } from '@angular/common';
import { Meta, Title } from '@angular/platform-browser';
import { getWindow } from 'ssr-window';

@Component({
  selector: 'app-blog-detail-page',
  templateUrl: './blog-detail-page.component.html',
  styleUrls: ['./blog-detail-page.component.css'],
})
export class BlogDetailPageComponent implements OnInit {
  html = null;
  title: string = '';
  subtitle: string = '';
  created_date: string = '';
  words: number = 0;

  isLoading: boolean = true;
  id: number | null = null;

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private snackBar: MatSnackBar,
    private location: Location,
    private metaService: Meta,
    private titleService: Title
  ) {
    this.metaService.updateTag({
      name: 'og:image',
      content: `https://terranusa.tech/api/assets/blog/${route.snapshot.params['id']}.png`,
    });

    this.metaService.updateTag({
      name: 'og:image:secure_url',
      content: `https://terranusa.tech/api/assets/blog/${route.snapshot.params['id']}.png`,
    });

    this.metaService.updateTag({
      name: 'og:type',
      content: 'article',
    });

    this.metaService.updateTag({
      name: 'og:locale',
      content: 'id_ID',
    });

    this.metaService.updateTag({
      name: 'twitter:card',
      content: 'summary_large_image',
    });

    this.metaService.updateTag({
      name: 'og:image:width',
      content: '1366',
    });

    this.metaService.updateTag({
      name: 'og:image:height',
      content: '768',
    });

    this.metaService.updateTag({
      name: 'twitter:image',
      content: `https://terranusa.tech/api/assets/blog/${route.snapshot.params['id']}.png`,
    });

    this.metaService.addTags([
      {
        name: 'robots',
        content: 'index, follow',
      },
      {
        name: 'author',
        content: 'Terra Nusa Teknologi',
      },
    ]);

    const id = parseInt(route.snapshot.params['id']);
    this.fetchBlog(id);

    this.setCanonicalURL(getWindow().location.href);
  }

  ngOnInit(): void {
    this.metaService.removeTag('name="title"');
    this.metaService.removeTag('name="description"');
    this.metaService.removeTag('name="keywords"');
    this.metaService.removeTag('name="og:title"');
    this.metaService.removeTag('name="og:description"');
    this.metaService.removeTag('name="og:image:alt"');
    this.metaService.removeTag('name="og:type"');
    this.metaService.removeTag('name="date"');

    this.route.params.subscribe((param) => {
      const id = parseInt(param['id']);

      this.metaService.updateTag({
        name: 'og:image',
        content: `https://terranusa.tech/api/assets/blog/${id}.png`,
      });
      this.fetchBlog(id);
    });
  }

  fetchBlog(id: number) {
    this.http
      .get(environment.apiUrl + '/blog/' + id)
      .subscribe({
        next: (data: any) => {
          this.html = data.content;
          this.title = data.title;
          this.subtitle = data.subtitle;
          this.id = data.id;
          this.created_date = data.created_date;
          this.words = data.words;

          this.titleService.setTitle(
            `Terra Nusa Teknologi | Blog | ${data.title}`
          );

          this.isLoading = false;
          this.setMetaTags(
            this.title,
            this.subtitle,
            `${environment.apiUrl}/assets/blog/${data.id}.png`,
            data.keywords.split(','),
            data.created_date
          );

          this.setCanonicalURL(
            `${environment.apiUrl}/blog/${data.id}/${data.title
              .toLowerCase()
              .replace(' ', '-')}`
          );
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

          this.location.back();
        },
      })
      .add(() => {
        this.isLoading = false;
      });
  }

  setCanonicalURL(url: string) {
    let link: HTMLMetaElement | null =
      this.metaService.getTag('rel="canonical"');
    if (!link) {
      this.metaService.addTag({ rel: 'canonical', href: url });
      this.metaService.addTag({ rel: 'og:url', href: url });
    } else {
      this.metaService.updateTag({ rel: 'canonical', href: url });
      this.metaService.updateTag({ rel: 'og:url', href: url });
    }
  }

  setMetaTags(
    title: string,
    description: string,
    image: string,
    keywords: string[],
    date: string
  ) {
    this.metaService.removeTag('name="title"');
    this.metaService.removeTag('name="description"');
    this.metaService.removeTag('name="keywords"');
    this.metaService.removeTag('name="og:title"');
    this.metaService.removeTag('name="og:description"');
    this.metaService.removeTag('name="og:image:alt"');
    this.metaService.removeTag('name="date"');

    this.metaService.updateTag({
      name: 'title',
      content: `Terra Nusa Teknologi | Blog | ${title}`,
    });
    this.metaService.updateTag({ name: 'description', content: description });
    this.metaService.updateTag({ name: 'keywords', content: keywords.join() });
    this.metaService.updateTag({
      name: 'og:title',
      content: `Terra Nusa Teknologi | Blog | ${title}`,
    });
    this.metaService.updateTag({
      name: 'og:description',
      content: description,
    });

    this.metaService.updateTag({ name: 'og:image:alt', content: title });
    this.metaService.updateTag({ name: 'date', content: date });

    this.metaService.updateTag({
      name: 'twitter:title',
      content: title,
    });

    this.metaService.updateTag({
      name: 'twitter:description',
      content: description,
    });

    this.metaService.updateTag({
      name: 'twitter:image:alt',
      content: title,
    });
  }

  share(type: string) {
    const url = `https://terranusa.tech/Blog/${this.id}/${encodeURIComponent(
      this.title.toLowerCase().replace(/ /g, '-')
    )}`;
    switch (type) {
      case 'facebook':
        getWindow().open(
          `https://www.facebook.com/sharer/sharer.php?u=${url}`,
          '_blank'
        );
        break;
      case 'linkedin':
        getWindow().open(
          `https://www.linkedin.com/shareArticle?mini=true&url=${url}`,
          '_blank'
        );
        break;
      case 'share':
        navigator.share({
          title: this.title,
          text: this.subtitle,
          url: url,
        });
    }
  }
}
