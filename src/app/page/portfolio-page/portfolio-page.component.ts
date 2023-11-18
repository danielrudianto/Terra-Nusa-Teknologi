import { Component, Input } from '@angular/core';
import { Portfolio } from 'src/app/models/portfolio.model';

@Component({
  selector: 'app-portfolio-page',
  templateUrl: './portfolio-page.component.html',
  styleUrls: ['./portfolio-page.component.css'],
})
export class PortfolioPageComponent {
  portfolios: Portfolio[] = [
    {
      title: 'Toko Matrix',
      description:
        'Pengembangan website untuk Toko Matrix, toko elektronik lokal yang berbasis di Mataram, Indonesia.',
      image: 'assets/portfolio/matrix.webp',
    },
    {
      title: 'AbangKu',
      description:
        'Pengembangan aplikasi untuk membantu KUPK Dirgantara, mengelola data anggota, dan juga digunakan untuk membantu proses pembuatan laporan.',
      image: 'assets/portfolio/abangku.webp',
    },
    {
      title: 'Wesign Media',
      description:
        'Pengembangan website untuk Wesign Media, sebuah agensi digital lokal yang berbasis di Bandung, Indonesia.',
      image: 'assets/portfolio/wesign.webp',
    },
    {
      title: 'Profil Indah',
      description:
        'Pengembangan sistem Enterprise Resource Planning (ERP) untuk Profil Indah, sebuah perusahaan distribusi furnitur lokal yang berbasis di Denpasar, Indonesia.',
      image: 'assets/portfolio/profil-indah.webp',
    },
    {
      title: 'Alpha Konstruksi Nusantara',
      description:
        'Pengembangan website untuk Alpha Konstruksi Nusantara, sebuah perusahaan konstruksi geoteknik nasional yang berbasis di Indonesia.',
      image: 'assets/portfolio/alpha.webp',
    },
  ];

  slideConfig = {
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          dots: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        },
      },
    ],
  };
}
