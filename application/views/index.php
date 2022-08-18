<!DOCTYPE html>
<html lang="id">

<head>
	<meta charset="UTF-8">
	<title>PT Terra Nusa Teknologi | IT Solutions</title>
	<meta name="description" content="PT Terra Nusa Teknologi, perusahaan yang bergerak di bidang pengembangan piranti lunak. Berdiri sejak 2022 berlokasi di Kota Bekasi, Jawa Barat, kami hadir untuk membantu merancang, membangun, mengimplementasikan, serta memelihara sistem manajemen perusahaan - perusahaan baik di skala UMKM hingga menengah.">
	<meta name="keywords" content="PT Terra Nusa Teknologi, Android application, Web application, IT Solutions">
	<link rel="canonical" href="<?= base_url() ?>">
	<meta name="robots" content="index, follow" />
	<meta name="author" content="xunny.id">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">

	<link rel="apple-touch-icon" sizes="180x180" href="<?= base_url() ?>/assets/favicons/apple-touch-icon.png">
	<link rel="icon" type="image/png" sizes="32x32" href="<?= base_url() ?>/assets/favicons/favicon-32x32.png">
	<link rel="icon" type="image/png" sizes="16x16" href="<?= base_url() ?>/assets/favicons/favicon-16x16.png">
	<link rel="manifest" href="<?= base_url() ?>/assets/favicons/site.webmanifest">

	<meta property="og:image" content="<?= base_url() ?>/assets/CoverImage.png" />
	<meta property="og:title" content="PT Terra Nusa Teknologi" />
	<meta property="og:description" content="PT Terra Nusa Teknologi, perusahaan yang bergerak di bidang pengembangan piranti lunak. Berdiri sejak 2022 berlokasi di Kota Bekasi, Jawa Barat, kami hadir untuk membantu merancang, membangun, mengimplementasikan, serta memelihara sistem manajemen perusahaan - perusahaan baik di skala UMKM hingga menengah." />
	<meta property="og:locale" content="id" />
	<meta property="og:type" content="website" />

	<meta name='theme-color' content='#437EEB'>

	<link rel="stylesheet" href="<?= base_url() ?>css/bootstrap.min.css">
	<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.css" />

	<link rel="stylesheet" href="<?= base_url() ?>css/main-style.css">
	<link rel="stylesheet" href="<?= base_url() ?>css/style.css">
	<link rel="stylesheet" href="<?= base_url() ?>css/dark-style.css">
	<link rel="stylesheet" href="<?= base_url() ?>css/light-style.css">
</head>

<body>
	<nav class="sticky-top">
		<div class="container">
			<div class="row py-2 justify-content-center">
				<div class="col-lg-6 col-md-6 col-sm-10 col-xs-12 text-start">
					<a class="navbar-brand" href='<?= base_url() ?>'>
						<img src='<?= base_url() ?>/assets/LogoLight.png' title="Logo PT Terra Nusa Teknologi" alt="Logo PT Terra Nusa Teknologi">
					</a>
					<button aria-label="Tombol menu" id='openMenuButton' onclick='openMenu()' class='d-md-none d-inline-block float-right' type='button'><img src="<?= base_url() ?>/assets/icons/Menu.png" alt='Ikon menu' title='Ikon menu'>
					</button>
				</div>
				<div class="col-lg-6 col-md-6 d-md-block d-none">
					<ul>
						<li class="nav-item active">
							<a class="nav-link" href="#" disabled>Beranda</a>
						</li>
						<li class="nav-item">
							<a class="nav-link" href="<?= site_url('About') ?>">Tentang</a>
						</li>
						<li class="nav-item">
							<a class="nav-link" href="<?= site_url('Contact') ?>">Kontak</a>
						</li>
						<li class='nav-item'>
							<button role='button' id='modebutton' class='mt-0 mode-button' onclick="switchMode()" aria-label="Switch mode"></button>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</nav>
	<header>
		<div class="container">
			<div class="row mt-3 justify-content-center">
				<div class="col-xl-6 col-lg-6 col-md-8 col-sm-10 col-xs-12 py-5 order-lg-1 order-2 p-3">
					<h1>Menghubungkan Ide Anda <strong>Tanpa Batas</strong><br><span>Dengan Teknologi</span></h1>
					<p>Di era teknologi 4.0, pandangan kita terhadap bisnis dan cara berinteraksi dengan konsumen telah berubah. PT Terra Nusa Teknologi hadir untuk menjawab kebutuhan tersebut, dengan personel yang terpercaya dan berpengalaman, PT. Terra Nusa Teknologi berkomitmen untuk membantu anda dalam melakukan digitalisasi perusahaan. Mari menyongsong era teknologi 4.0 bersama kami !</p>

					<button type="button" aria-label="Learn more button">Mulai</button>
				</div>
				<div class="col-xl-6 col-lg-6 col-md-8 col-sm-10 col-xs-12 py-5 order-lg-2 order-1 px-5">
					<img src="<?= base_url() ?>/assets/Hero.webp" class="w-100" alt="Gambar utama" title="Ilustrasi Teknologi">
				</div>
			</div>
		</div>
	</header>
	<section id="about" class="py-5">
		<div class="container">
			<div class="row justify-content-center">
				<div class="col-xl-6 col-lg-6 col-md-8 col-sm-10 col-xs-12 mb-3">
					<h2>Tentang Kami</h2>
					<h3>Kami menyediakan solusi IT untuk kebutuhan operasional perusahaan anda</h3>

					<p>PT Terra Nusa Teknologi adalah perusahaan teknologi informasi yang bergerak di pengembangan piranti lunak seperti aplikasi berbasis web, aplikasi mobile, ataupun aplikasi desktop, kami juga menawarkan jasa pemeliharaan sistem informasi. Secara resmi didirikan pada tahun 2022 di Kota Bekasi, perusahaan kami telah beroperasi dalam merancang, membangun, mengimplementasikan dan memelihara sistem manajemen kepada beberapa perusahaan dari skala kecil sampai skala menengah.</p>
					<p>Kami mengutamakan kerahasiaan data anda dan perusahaan anda, profesionalitas adalah nilai jual kami dalam melayani klien kami.</p>
				</div>
				<div class="col-xl-6 col-lg-6 col-md-8 col-sm-10 col-xs-12">
					<div class="swiper" id='service-swipe'>
						<div class="swiper-wrapper">
							<div class="swiper-slide">
								<div class="card">
									<img src='<?= base_url() ?>/assets/icons/Business.webp' title='Ikon bisnis' alt='Ikon bisnis'>
									<h4>Bisnis</h4>
									<ul>
										<li>
											<h5>Konsultasi IT dan Produk Digital</h5>
										</li>
										<li>

											<h5>Konsultasi Pengembangan Digital</h5>
										</li>
										<li>
											<h5>Konsultasi Database</h5>
										</li>
										<li>
											<h5>Monitor Sistem Digital</h5>
										</li>
									</ul>
								</div>
							</div>
							<div class="swiper-slide">
								<div class="card">
									<img src='<?= base_url() ?>/assets/icons/Development.webp' title='Ikon pengembangan' alt='Ikon pengembangan'>
									<h4>Pengembangan</h4>
									<ul>
										<li>
											<h5>Pengembangan IOS & Android</h5>
										</li>
										<li>
											<h5>Pengembangan Web</h5>
										</li>
									</ul>
								</div>
							</div>
							<div class="swiper-slide">
								<div class="card">
									<img src='<?= base_url() ?>/assets/icons/Creative.webp' title='Ikon kreatif' alt='Ikon kreatif'>
									<h4>Kreatif</h4>
									<ul>
										<li>
											<h5>Desain UI dan UX</h5>
										</li>
										<li>
											<h5><i>Search Engine Optimization</i></h5>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>

	<section id='tech' class='py-5'>
		<div class="container">
			<div class="row">
				<div class="col-12">
					<h2>Spesialisasi Kami</h2>
					<div class="swiper" id='tech-swipe'>
						<div class="swiper-wrapper">
							<div class="swiper-slide">
								<img src='<?= base_url() ?>/assets/android.png' alt='Android logo' title='Android logo'>
							</div>
							<div class="swiper-slide">
								<img src='<?= base_url() ?>/assets/angular.png' alt='Angular logo' title='Angular logo'>
							</div>
							<div class="swiper-slide">
								<img src='<?= base_url() ?>/assets/gcloud.png' alt='Google Cloud Platform logo' title='Google Cloud Platform logo'>
							</div>
							<div class="swiper-slide">
								<img src='<?= base_url() ?>/assets/ios.png' alt='iOS logo' title='iOS logo'>
							</div>
							<div class="swiper-slide">
								<img src='<?= base_url() ?>/assets/nodejs.png' alt='Node JS logo' title='Node JS logo'>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>

	<section id='solution' class='py-5'>
		<div class="container">
			<div class="row">
				<div class="col-12">
					<h2>Solusi Unggulan</h2>
				</div>
			</div>
			<div class="row justify-content-center mb-3">
				<div class="col-xl-6 col-lg-6 col-md-8 col-sm-10 col-xs-12">
					<div class="product-box" id="product-box-1"></div>
					<h3 class='text-center'>Terra Project Management</h3>
				</div>
			</div>
			<div class="row justify-content-center mb-3">
				<div class="col-xl-6 col-lg-6 col-md-8 col-sm-10 col-xs-12">
					<div class="product-box" id="product-box-2"></div>
					<h3 class='text-center'>Terra Distribution System</h3>
				</div>
			</div>

			<div class="row mt-5">
				<div class="col-12 text-center">
					<a role="button">Lihat lebih</a>
				</div>
			</div>
		</div>
	</section>

	<section id='contact' class='py-5 text-center'>
		<h2>Kontak Kami</h2>
		<h3 class='mb-5'>Siap untuk melakukan transformasi untuk perusahaan anda? Konsultasikan dengan kami</h3>
		<a role='button' href="<?= site_url('Contact') ?>">Hubungi kami sekarang</a>
	</section>

	<aside id='menu' class='menu-background'>
		<div class='menu'>
			<button aria-label="Tombol pengubah tema" role='button' id='modeSmallButton' class='mt-0 mode-small-button' onclick="closeMenu();switchMode()" aria-label="Switch mode"></button>
			<button aria-label="Tombol penutup menu" class='close-small-button' id='close-button' onclick="closeMenu()"><img src='<?= base_url() ?>/assets/icons/CloseDark.png' alt='Ikon tutup' title='Tutup menu'></button>
			<ul>
				<li class="vertical-nav-item">
					<a href="#">Beranda</a>
				</li>
				<li class="vertical-nav-item">
					<a href="<?= site_url('About') ?>">Tentang</a>
				</li>
				<li class="vertical-nav-item">
					<a href="<?= site_url('Contact') ?>">Kontak</a>
				</li>
			</ul>
		</div>
	</aside>

	<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js" integrity="sha512-894YE6QWD5I59HgZOGReFYm4dnWc1Qt5NtvYSaNcOP+u1T9qYdvdihz0PPSiiqn/+/3e7Jo4EaG7TubfWGUrMQ==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
	<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.min.js" integrity="sha384-ODmDIVzN+pFdexxHEHFBQH3/9/vQ9uori45z4JjnFsRydbmQbmL5t1tQ0culUzyK" crossorigin="anonymous"></script>
	<script src="https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.js"></script>
	<script type="text/javascript">
		const techSwipe = new Swiper('#tech-swipe', {
			direction: 'horizontal',
			loop: true,
			slidesPerView: 1,
			spaceBetween: 10,
			centeredSlides: true,
			breakpoints: {
				576: {
					slidesPerView: 1.5,
					spaceBetween: 30,
				},
				768: {
					slidesPerView: 1.8,
					spaceBetween: 30,
				},
				992: {
					slidesPerView: 2.5,
					spaceBetween: 30,
				}
			},
			keyboard: {
				enabled: true
			},
			autoplay: {
				delay: 5000,
				disableOnInteraction: false,
			},
		});

		const serviceSwipe = new Swiper('#service-swipe', {
			direction: 'horizontal',
			loop: false,
			pagination: true,
			slidesPerView: 1.2,
			spaceBetween: 10,
			centeredSlides: true,
			breakpoints: {
				576: {
					slidesPerView: 1.3,
					spaceBetween: 30,
				},
				768: {
					slidesPerView: 1.5,
					spaceBetween: 30,
				},
				992: {
					slidesPerView: 1.5,
					spaceBetween: 50,
				}
			},
			keyboard: {
				enabled: true
			},
		});
	</script>
	<script type='text/javascript' src="<?= base_url() ?>/js/script.js"></script>
</body>