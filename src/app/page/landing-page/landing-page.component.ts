import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css'],
})
export class LandingPageComponent implements OnInit {
  constructor(private metaService: Meta) {}

  @ViewChild('contact') contact!: ElementRef;
  @ViewChild('service') service!: ElementRef;
  onClick(event: string) {
    if (event == 'contact') {
      this.contact.nativeElement.scrollIntoView({ behavior: 'smooth' });
    }

    if (event == 'service') {
      this.service.nativeElement.scrollIntoView({ behavior: 'smooth' });
    }
  }

  ngOnInit(): void {
    this.metaService.addTags([
      {
        name: 'robots',
        content: 'index, follow',
      },
      {
        name: 'author',
        content: 'Terra Nusa Teknologi',
      },
      {
        name: 'description',
        content:
          'PT Terra Nusa Teknologi is an IT Solution company based in Bekasi, Indonesia since 2021. Throughout those years, we have successfully helped our clients develop their business by providing them with the best digital solutions.',
      },
      {
        name: 'canonical',
        content: 'https://terranusa.tech',
      },
      {
        name: 'og:title',
        content: "PT Terra Nusa Teknologi | Indonesia's IT Solution",
      },
      {
        name: 'keywords',
        content:
          'IT Solution, IT Solution Company, IT Solution Company in Indonesia, IT Solution Company in Bekasi, IT Solution Company in Jakarta, IT Solution Company in Bandung, IT Solution Company in Surabaya, IT Solution Company in Medan, IT Solution Company in Bali, IT Solution Company in Makassar, IT Solution Company in Semarang, IT Solution Company in Yogyakarta, IT Solution Company in Palembang, IT Solution Company in Tangerang, IT Solution Company in Depok, IT Solution Company in Malang, IT Solution Company in Padang, IT Solution Company in Bandar Lampung, IT Solution Company in Bogor, IT Solution Company in Batam, IT Solution Company in Pekanbaru, IT Solution Company in Bandar Lampung, IT Solution Company in Samarinda, IT Solution Company in Tasikmalaya, IT Solution Company in Banjarmasin, IT Solution Company in Pontianak, IT Solution Company in Cimahi, IT Solution Company in Balikpapan, IT Solution Company in Jambi, IT Solution Company in Surakarta, IT Solution Company in Mataram, Software house',
      },
      {
        name: 'og:description',
        content:
          'PT Terra Nusa Teknologi is an IT Solution company based in Bekasi, Indonesia since 2021. Throughout those years, we have successfully helped our clients develop their business by providing them with the best digital solutions.',
      },
      {
        name: 'og:image',
        content: 'https://terranusa.tech/assets/og-image.png',
      },
      {
        name: 'og:url',
        content: 'https://terranusa.tech',
      },
      {
        name: 'og:site_name',
        content: 'PT Terra Nusa Teknologi',
      },
      {
        name: 'og:type',
        content: 'website',
      },
      {
        name: 'twitter:card',
        content: 'summary_large_image',
      },
    ]);

    this.metaService.addTag({
      rel: 'canonical',
      href: 'https://terranusa.tech',
    });
  }
}
