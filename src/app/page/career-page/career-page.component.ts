import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { environment } from 'src/environments/environment.development';
import { CareerDetailPageComponent } from './career-detail-page/career-detail-page.component';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-career-page',
  templateUrl: './career-page.component.html',
  styleUrls: ['./career-page.component.css'],
})
export class CareerPageComponent implements OnInit {
  isLoading: boolean = true;
  data: any[] = [];
  constructor(
    private http: HttpClient,
    private dialog: MatDialog,
    private metaService: Meta,
    private titleService: Title
  ) {}

  ngOnInit(): void {
    this.titleService.setTitle('Terra Nusa Teknologi | Karier');
    this.metaService.updateTag({
      name: 'description',
      content:
        'Selamat datang di halaman karier Terra Nusa Teknologi. Pada halaman ini, Anda dapat melihat lowongan pekerjaan yang tersedia di perusahaan kami',
    });

    this.metaService.updateTag({
      property: 'og:title',
      content: 'Terra Nusa Teknologi | Karier',
    });

    this.metaService.updateTag({
      property: 'og:description',
      content:
        'Selamat datang di halaman karier Terra Nusa Teknologi. Pada halaman ini, Anda dapat melihat lowongan pekerjaan yang tersedia di perusahaan kami',
    });

    this.metaService.updateTag({
      property: 'og:url',
      content: 'https://terranusa.tech/Career',
    });

    // Cannonical
    this.metaService.updateTag({
      property: 'og:type',
      content: 'website',
    });

    this.metaService.updateTag({
      property: 'canonical',
      content: 'https://terranusa.tech/Career',
    });

    this.metaService.updateTag({
      property: 'og:site_name',
      content: 'Terra Nusa Teknologi',
    });

    this.metaService.updateTag({
      property: 'keywords',
      content:
        'Terra Nusa Teknologi, Terra Nusa, Terra Nusa Karier, Terra Nusa Teknologi Karier, Terra Nusa Teknologi Career, Terra Nusa Career, Terra Nusa Teknologi Lowongan, Terra Nusa Lowongan, Terra Nusa Teknologi Lowongan Kerja, Terra Nusa Lowongan Kerja, Terra Nusa Teknologi Lowongan Pekerjaan, Terra Nusa Lowongan Pekerjaan, Terra Nusa Teknologi Pekerjaan, Terra Nusa Pekerjaan, Terra Nusa Teknologi Pekerjaan, Terra Nusa Pekerjaan, Terra Nusa Teknologi Pekerjaan, Terra Nusa Pekerjaan, Terra Nusa Teknologi Pekerjaan, Terra Nusa Pekerjaan, Terra Nusa Teknologi Pekerjaan, Terra Nusa Pekerjaan, Terra Nusa Teknologi Pekerjaan, Terra Nusa Pekerjaan, Terra Nusa Teknologi Pekerjaan, Terra Nusa Pekerjaan, Terra Nusa Teknologi Pekerjaan, Terra Nusa Pekerjaan',
    });

    this.http
      .get(`${environment.apiUrl}/career`)
      .subscribe((res) => {
        this.data = res as any[];
      })
      .add(() => {
        this.isLoading = false;
      });
  }

  openVacation(vacation: any) {
    this.dialog.open(CareerDetailPageComponent, {
      data: vacation,
      panelClass: 'career-detail-dialog',
    });
  }
}
