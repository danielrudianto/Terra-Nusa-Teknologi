<!DOCTYPE html>
<html lang="id">

<head>
	<meta charset="UTF-8">
	<title>PT Terra Nusa Teknologi | IT Solutions | Portfolio</title>
	<meta name="description" content="PT Terra Nusa Teknologi, perusahaan yang bergerak di bidang pengembangan piranti lunak. Berdiri sejak 2022 berlokasi di Kota Bekasi, Jawa Barat, kami hadir untuk membantu merancang, membangun, mengimplementasikan, serta memelihara sistem manajemen perusahaan - perusahaan baik di skala UMKM hingga menengah.">
	<meta name="keywords" content="PT Terra Nusa Teknologi, Android application, Web application, IT Solutions">
	<link rel="canonical" href="<?= base_url() ?>Contact">
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
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="627" />

	<meta name='theme-color' content='#437EEB'>

	<link rel="stylesheet" href="<?= base_url() ?>css/bootstrap.min.css">
	<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.css" />

	<link rel="stylesheet" href="<?= base_url() ?>css/main-style.css">
	<link rel="stylesheet" href="<?= base_url() ?>css/portfolio-style.css">
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
					<div class="contact-card">
						<ul>
							<li class="nav-item active">
								<a class="nav-link" href="<?= base_url() ?>">Beranda</a>
							</li>
							<li class="nav-item">
								<a class="nav-link" href="<?= site_url('Portfolio') ?>">Portfolio</a>
							</li>
							<li class="nav-item">
								<a class="nav-link" disabled href="#">Kontak</a>
							</li>
							<li class='nav-item'>
								<button role='button' id='modebutton' class='mt-0 mode-button' onclick="switchMode()" aria-label="Switch mode"></button>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</nav>
	<header>
		<div class="container">
			<div class="row">
				<div class="col-12">
					<h1 class='text-center'>Portfolio</h1>
				</div>
			</div>
		</div>
	</header>

	<section id='portfolio'>
		<div class="container">
			<div class="row justify-content-center">
				<div class='col-xl-4 col-lg-4 col-md-6 col-sm-8 col-xs-10 mt-2 mb-3'>
					<div class="product-box" id="product-box-2"></div>
					<p>Project Management</p>
				</div>
				<div class='col-xl-4 col-lg-4 col-md-6 col-sm-8 col-xs-10 mt-2 mb-3'>
					<div class="product-box" id="product-box-1"></div>
					<p>Distribution System</p>
				</div>
				<div class='col-xl-4 col-lg-4 col-md-6 col-sm-8 col-xs-10 mt-2 mb-3'>
					<div class="product-box" id="product-box-3"></div>
					<p>Website Redesign</p>
				</div>
				<div class='col-xl-4 col-lg-4 col-md-6 col-sm-8 col-xs-10 mt-2 mb-3'>
					<div class="product-box" id="product-box-4"></div>
					<p>E-commerce</p>
				</div>
			</div>
		</div>
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
					<a href="<?= site_url('Portfolio') ?>">Portfolio</a>
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