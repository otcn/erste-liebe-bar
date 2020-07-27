<!doctype html>
<html lang="de">
	<head>
		
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width,initial-scale=1">
		<title><?= $site->title() ?></title>
		<meta name="description" content="<?= $site->socialdesc() ?>">
		
		<meta name="author" content="Erste Liebe Bar">
		
		<meta property="og:title" content="<?= $site->title() ?>">
		<meta property="og:type" content="website">
		<meta property="og:locale" content="de_DE">
		<meta property="og:url" content="<?= $site->url() ?>">
		<meta property="og:site_name" content="<?= $site->title() ?>">
		<meta property="og:description" content="<?= $site->socialdesc() ?>">
		
		<?php if($image = $site->socialimage()->toFile()): ?>
		<meta property="og:image" content="<?= $image->url() ?>">
		<meta itemprop="image" content="<?= $image->url() ?>">
		<?php endif ?>
		
		<?= css(['assets/css/main.css', '@auto']) ?>
		<?= js(['assets/js/main.min.js', '@auto']) ?>
	</head>
	
	<body>
		<header>
			<h1><a href="<?= $site->url() ?>">Erste Liebe Bar</a></h1>
		</header>