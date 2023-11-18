import { Component } from '@angular/core';
import { Service } from 'src/app/models/service.model';

@Component({
  selector: 'app-service-page',
  templateUrl: './service-page.component.html',
  styleUrls: ['./service-page.component.css'],
})
export class ServicePageComponent {
  services: Service[] = [
    {
      title: 'Pengembangan Web',
      description:
        'Mengembangkan website yang menakjubkan dan responsif yang meninggalkan kesan mendalam pada audiens Anda.',
      image: 'assets/images/web.webp',
      selected: true,
    },
    {
      title: 'Pengembangan Desktop',
      description:
        'Tingkatkan produktivitas Anda dengan aplikasi desktop kami. Para pengembang ahli kami merancang solusi yang disesuaikan yang menyederhanakan alur kerja Anda dan mendorong efisiensi.',
      image: 'assets/images/desktop.webp',
      selected: false,
    },
    {
      title: 'Pengembangan Android & iOS',
      description:
        'Adopsi revolusi mobile dengan layanan pengembangan aplikasi kami yang luar biasa. Dari konsep hingga peluncuran, kami membangun aplikasi yang mudah digunakan yang beresonansi dengan audiens target Anda.',
      image: 'assets/images/mobile.webp',
      selected: false,
    },
    {
      title: 'Cloud Computing',
      description:
        'Bawa bisnis Anda ke cloud dengan layanan cloud computing canggih kami. Kami membantu Anda memigrasikan data Anda ke cloud dan mengoptimalkan kinerja bisnis Anda.',
      image: 'assets/images/cloud.webp',
      selected: false,
    },
    {
      title: 'Pemodelan AI & ML',
      description:
        'Rasakan kekuatan AI dengan layanan pemodelan canggih kami. Dari analitik prediktif hingga pembelajaran mesin, kami memanfaatkan kemampuan AI untuk mengoptimalkan strategi bisnis Anda.',
      image: 'assets/images/ai.webp',
      selected: false,
    },
  ];
}
