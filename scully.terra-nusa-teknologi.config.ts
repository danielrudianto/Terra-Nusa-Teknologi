import { ScullyConfig } from '@scullyio/scully';
const { registerPlugin } = require('@scullyio/scully');
import fetch from 'node-fetch';

registerPlugin('router', 'blogsPlugin', async () => {
  const response = await (
    await fetch('https://terranusa.tech/api/routes')
  ).json();

  return response;
  // console.log(response);
  // return [
  //   { route: '/Blog/1/desain-web-responsif' },
  //   { route: '/Blog/2/hal-krusial-semua-programmer-perlu-ketahui' },
  //   {
  //     route: '/Blog/3/kesalahan-programmer-berujung-pada-masalah-keamanan-data',
  //   },
  //   { route: '/Blog/4/5-framework-css-terbaik-untuk-pengembangan-website' },
  //   {
  //     route:
  //       '/Blog/5/tantangan-tanpa-akhir-cara-membuat-desain-website-yang-mudah-digunakan',
  //   },
  //   { route: '/Blog/6/5-kepribadian-seorang-programmer-hebat' },
  //   {
  //     route:
  //       '/Blog/7/mengapa-anda-perlu-memilih-outsourcing-untuk-kebutuhan-it-perusahaan-anda',
  //   },
  //   { route: '/Blog/8/buat-audiens-anda-terpukau-dengan-trik-ini' },
  //   { route: '/Blog/9/5-framework-php-terbaik-untuk-pengembangan-website' },
  //   { route: '/Blog/10/aplikasi-real-time-dengan-websocket' },
  //   {
  //     route:
  //       '/Blog/11/inilah-manfaat-website-bagi-perusahaan-tak-perlu-ragu-untuk-membuatnya',
  //   },
  //   {
  //     route:
  //       '/Blog/12/mengenal-aplikasi-customer-relationship-management-apa-saja-manfaatnya',
  //   },
  //   {
  //     route:
  //       '/Blog/13/manfaat-menggunakan-aplikasi-keuangan-perusahaan-untuk-bisnis-yang-dijalankan',
  //   },
  //   {
  //     route:
  //       '/Blog/14/7-manfaat-menggunakan-aplikasi-absensi-online-berbasis-web-untuk-perusahaan',
  //   },
  //   {
  //     route:
  //       '/Blog/15/pentingnya-aplikasi-inventory-barang-berbasis-web-dalam-bisnis',
  //   },
  //   {
  //     route:
  //       '/Blog/16/ketahui-pentingnya-aplikasi-penjualan-berbasis-web-untuk-bisnis',
  //   },
  //   {
  //     route:
  //       '/Blog/17/keuntungan-penggunaan-aplikasi-manajemen-proyek-konstruksi-bagi-perusahaan',
  //   },
  //   {
  //     route:
  //       '/Blog/18/pentingnya-aplikasi-laporan-keuangan-mobile-bagi-sebuah-perusahaan',
  //   },
  //   {
  //     route:
  //       '/Blog/19/mengenal-manfaat-aplikasi-komputer-akuntansi-bagi-perusahaan',
  //   },
  //   {
  //     route:
  //       '/Blog/20/fungsi-aplikasi-pengolah-angka-yang-menguntungkan-bagi-perusahaan',
  //   },
  //   {
  //     route:
  //       '/Blog/21/mengenal-aplikasi-penjualan-dan-stok-barang-dan-urgensinya',
  //   },
  //   {
  //     route:
  //       '/Blog/22/ketahui-apa-saja-manfaat-digital-marketing-dalam-ulasan-berikut-ini',
  //   },
  //   { route: '/Blog/23/secure-shell-dan-manfaatnya-bagi-keamanan-informasi' },
  //   {
  //     route:
  //       '/Blog/24/benarkah-media-promosi-online-paling-efektif-bisa-meningkatkan-penjualan',
  //   },
  //   { route: '/Blog/25/os-linux-terbaik-2021-penggunaan-sehari-hari' },
  //   {
  //     route: '/Blog/26/kelebihan-dan-kekurangan-linux-yang-anda-perlu-ketahui',
  //   },
  //   { route: '/Blog/27/9-manfaat-penulisan-artikel-pada-web-pribadi' },
  //   { route: '/Blog/28/cara-promosi-online-yang-menarik-dan-efektif' },
  //   { route: '/Blog/29/daftar-aplikasi-customer-service-yang-mudah-digunakan' },
  //   {
  //     route: '/Blog/30/11-aplikasi-meeting-online-yang-memiliki-fitur-lengkap',
  //   },
  //   {
  //     route:
  //       '/Blog/31/apa-manfaat-website-dalam-bisnis-online-secara-menyeluruh',
  //   },
  //   { route: '/Blog/32/kenapa-website-saya-sepi-pengunjung' },
  //   {
  //     route:
  //       '/Blog/33/inilah-rekomendasi-aplikasi-penting-manajemen-perusahaan',
  //   },
  //   { route: '/Blog/34/media-interaktif-berbasis-web-terbaik' },
  //   { route: '/Blog/35/cara-meningkatkan-traffic-web-dengan-cepat' },
  //   {
  //     route:
  //       '/Blog/36/tren-masa-kini-penggunaan-teknologi-ai-dalam-web-development',
  //   },
  //   { route: '/Blog/37/3-cara-melihat-traffic-web-orang-lain-dengan-mudah' },
  //   { route: '/Blog/38/mengenal-kegunaan-aplikasi-web-progresif' },
  //   { route: '/Blog/39/cara-meningkatkan-penghasilan-adsense-dari-web' },
  //   { route: '/Blog/40/aplikasi-surat-masuk-dan-surat-keluar-berbasis-web' },
  //   { route: '/Blog/41/mengenal-regular-expression' },
  //   {
  //     route: '/Blog/42/ketahui-apa-saja-manfaat-aplikasi-media-promosi-online',
  //   },
  //   {
  //     route:
  //       '/Blog/43/fungsi-database-administrator-yang-perlu-anda-pahami-secara-detail',
  //   },
  //   { route: '/Blog/44/aplikasi-monitoring-jaringan-berbasis-web' },
  //   {
  //     route:
  //       '/Blog/45/manfaat-aplikasi-pembayaran-berbasis-web-untuk-segala-transaksi',
  //   },
  //   { route: '/Blog/46/penerapan-teknologi-canggih-digital-marketing' },
  //   { route: '/Blog/47/keuntungan-aplikasi-input-data-berbasis-web' },
  //   {
  //     route:
  //       '/Blog/48/simak-definisi-dan-contoh-program-python-di-bidang-penjualan',
  //   },
  //   { route: '/Blog/49/ketahui-cara-mudah-membuat-web-dengan-php' },
  //   { route: '/Blog/50/beberapa-tips-dan-trik-belajar-coding-dari-nol' },
  //   {
  //     route:
  //       '/Blog/51/yuk-mengenal-dan-melihat-beberapa-contoh-program-python-web',
  //   },
  //   {
  //     route:
  //       '/Blog/52/simak-4-panduan-belajar-bahasa-pemrograman-c-untuk-pemula',
  //   },
  //   {
  //     route:
  //       '/Blog/53/mengenal-bahasa-pemrograman-c-untuk-pemula-sejarah-dan-komponen',
  //   },
  //   { route: '/Blog/54/4-tips-belajar-pemrograman-web-dengan-php-dan-mysql' },
  //   {
  //     route: '/Blog/55/fungsi-software-developer-yang-menjamin-kenyamanan-anda',
  //   },
  //   {
  //     route: '/Blog/56/contoh-bahasa-pemrograman-php-dijamin-mudah-dipelajari',
  //   },
  //   {
  //     route:
  //       '/Blog/57/pemrograman-web-dan-perangkat-bergerak-ini-yang-perlu-anda-ketahui',
  //   },
  //   {
  //     route:
  //       '/Blog/58/tips-dan-trik-belajar-coding-di-hp-paling-gampang-bagi-pemula',
  //   },
  //   {
  //     route:
  //       '/Blog/59/5-contoh-library-modul-untuk-membuat-aplikasi-dengan-python',
  //   },
  //   {
  //     route:
  //       '/Blog/60/paling-populer-ini-dia-5-bahasa-pemrograman-untuk-membuat-aplikasi',
  //   },
  //   { route: '/Blog/61/bongkar-rahasia-ini-dia-program-c-indomaret' },
  //   {
  //     route:
  //       '/Blog/62/mengenal-pengertian-hingga-contoh-pemrograman-berorientasi-objek-untuk-pemrograman-aplikasi',
  //   },
  //   { route: '/Blog/63/belajar-bahasa-pemrograman-untuk-android-mudah' },
  //   { route: '/Blog/64/6-cara-menjadi-programmer-pemula-apa-saja' },
  //   {
  //     route:
  //       '/Blog/65/inilah-6-web-untuk-belajar-coding-dijamin-dapat-meningkatkan-skill-coding-anda',
  //   },
  //   {
  //     route: '/Blog/66/mudah-dan-gratis-ini-dia-3-website-untuk-belajar-coding',
  //   },
  //   {
  //     route:
  //       '/Blog/67/contoh-program-python-daftar-mahasiswa-yang-mudah-buat-kamu',
  //   },
  //   {
  //     route:
  //       '/Blog/68/bahasa-pemrograman-untuk-membuat-aplikasi-android-dengan-mudah',
  //   },
  //   { route: '/Blog/69/mengenal-bahasa-pemrograman-untuk-android-dan-website' },
  //   {
  //     route:
  //       '/Blog/70/ingin-mencegah-website-terserang-malware-berikut-caranya',
  //   },
  //   { route: '/Blog/71/keuntungan-memiliki-website-toko-online-dalam-bisnis' },
  //   { route: '/Blog/72/intip-cara-membuat-website-olshop-anti-ribet' },
  //   {
  //     route:
  //       '/Blog/73/cara-meningkatkan-trafik-website-tanpa-menggunakan-iklan',
  //   },
  //   { route: '/Blog/74/intip-cara-desain-website-dengan-mudah-dan-cepat' },
  //   { route: '/Blog/75/bank-digital-terbaik-di-indonesia%2C-pasti-punya-ini' },
  //   {
  //     route:
  //       '/Blog/76/cara-mengumpulkan-uang-dengan-cepat-adalah-membangun-situs',
  //   },
  //   {
  //     route:
  //       '/Blog/77/menggali-pertumbuhan-strategi-pemasaran-digital-teruji-untuk-bisnis-kecil',
  //   },
  //   {
  //     route:
  //       '/Blog/78/optimalkan-produksi-erp-terkini-untuk-perusahaan-manufaktur',
  //   },
  //   {
  //     route:
  //       '/Blog/79/sukses-digital-strategi-pengembangan-software-khusus-untuk-platform-e-commerce',
  //   },
  //   {
  //     route:
  //       '/Blog/80/membuat-pengalaman-digital-tren-dan-tips-dalam-desain-web-modern',
  //   },
  //   {
  //     route: '/Blog/81/memahami-perintah-linux-panduan-lengkap-untuk-pengguna',
  //   },
  //   { route: '/Blog/82/contoh-program-python-menghitung-ipk-mahasiswa' },
  //   {
  //     route:
  //       '/Blog/83/mengungkap-rahasia-seo-panduan-komprehensif-untuk-pemula',
  //   },
  //   {
  //     route:
  //       '/Blog/84/menguasai-seni-pembuatan-konten-seo-meningkatkan-kehadiran-online-anda',
  //   },
  //   {
  //     route:
  //       '/Blog/85/telnet-mengeksplor-sejarah%2C-penggunaan%2C-dan-relevansinya-hari-ini',
  //   },
  //   {
  //     route:
  //       '/Blog/86/sql-injection-membedah-ancaman-nyata-di-dunia-keamanan-digital',
  //   },
  //   {
  //     route:
  //       '/Blog/87/mengamankan-internet-of-things-iot-seimbangkan-kenyamanan-dan-keamanan',
  //   },
  //   { route: '/Blog/88/mendalami-rtmp-protokol-pengiriman-pesan-real-time' },
  //   {
  //     route:
  //       '/Blog/89/membongkar-seo-teknis-panduan-mengoptimalkan-backend-website-anda',
  //   },
  //   {
  //     route:
  //       '/Blog/90/memahami-seo-strategi-penting-untuk-pencapaian-tertinggi-di-mesin-pencari',
  //   },
  //   { route: '/Blog/91/strategi-seo-yang-efektif-mendekati-puncak-pencarian' },
  //   { route: '/Blog/92/meningkatkan-performa-bisnis-melalui-software-kustom' },
  // ];
});

export const config: ScullyConfig = {
  projectRoot: './src',
  projectName: 'terra-nusa-teknologi',
  distFolder: './dist/terra-nusa-teknologi', // output directory of your Angular build artifacts
  outDir: './dist/static', // directory for scully build artifacts
  defaultPostRenderers: [],
  routes: {
    '/Blog/:id/:title': {
      type: 'blogsPlugin',
    },
  },
};
