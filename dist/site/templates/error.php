<? snippet('header') ?>

<ol class="tiles">
  <li class="tile" data-position="left">
    <ol class="sub-tiles" data-layout="horizontal">
      <li class="sub-tile text">
        <?= $page->text()->kirbytext() ?>
      </li>
      
      <li class="sub-tile text">
        <p>404</p>
      </li>
      
      <li class="sub-tile image" data-width="full-width" data-animation="no-animation" data-alignment="center-center">
        <?php if($image = $page->image()): ?>
          <img src="<?= $image->url() ?>" alt="" />
        <?php endif ?>
      </li>   				    					
    </ol>
  </li>
</ol>

<? snippet('footer') ?>