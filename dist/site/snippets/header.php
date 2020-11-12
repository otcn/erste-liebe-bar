<?
$ogImg = '';

if ($site->socialimage()->isNotEmpty()) {
  $ogImg = $site->socialimage()->toFile()->thumb("social")->url();
} else {
  $ogImg = $site->url() . '/assets/images/og-image-default.jpg';
}
?>

<!doctype html>
<html lang="de">
  <head>
    
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width,initial-scale=1.0">
  
    <title><?= $site->title() ?></title>
    
    <meta name="description" content="<?= $site->socialdescription()->isNotEmpty() ? $site->socialdescription() : 'Erste Liebe Bar – Frühstück, Limonaden und Pasta sowie wechselnde Kunstausstellungen in minimalistischer Loft-Atmosphäre.' ?>">
    <meta name="author" content="Erste Liebe Bar, Mark Booch, Fabian Heine">
    <meta name="robots" content="index, follow">
    
    <meta property="og:title" content="<?= $site->title() ?>">
    <meta property="og:type" content="website">
    <meta property="og:locale" content="de_DE">
    <meta property="og:url" content="<?= $site->url() ?>">
    <meta property="og:site_name" content="<?= $site->title() ?>">
    <meta property="og:description" content="<?= $site->socialdescription()->isNotEmpty() ? $site->socialdescription() : 'Erste Liebe Bar – Frühstück, Limonaden und Pasta sowie wechselnde Kunstausstellungen in minimalistischer Loft-Atmosphäre.' ?>">
    <meta property="og:image" content="<?= $ogImg ?>">
    <meta property="twitter:image" content="<?= $ogImg ?>">
    
    <link rel="apple-touch-icon" sizes="60x60" href="<?= $site->url() ?>/assets/images/apple-icon-60x60.png">
    <link rel="apple-touch-icon" sizes="120x120" href="<?= $site->url() ?>/assets/images/apple-icon-120x120.png">
    <link rel="apple-touch-icon" sizes="180x180" href="<?= $site->url() ?>/assets/images/apple-icon-180x180.png">
    <link rel="icon" type="image/png" sizes="48x48"  href="<?= $site->url() ?>/assets/images/android-icon-48x48.png">
    <link rel="icon" type="image/png" sizes="96x96"  href="<?= $site->url() ?>/assets/images/android-icon-96x96.png">
    <link rel="icon" type="image/png" sizes="192x192"  href="<?= $site->url() ?>/assets/images/android-icon-192x192.png">
    <link rel="icon" type="image/png" sizes="16x16" href="<?= $site->url() ?>/assets/images/favicon-16x16.png">
    <link rel="icon" type="image/png" sizes="32x32" href="<?= $site->url() ?>/assets/images/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="96x96" href="<?= $site->url() ?>/assets/images/favicon-96x96.png">
    <meta name="msapplication-TileImage" content="<?= $site->url() ?>/assets/images/ms-icon-144x144.png">
  
    <?= css(['assets/css/main.css', '@auto']) ?>
  
  </head>
	
	<body class="template-<?= $page->template() ?>">
		<header>
			<h1><a href="<?= $site->url() ?>">Erste Liebe Bar</a></h1>
		</header>