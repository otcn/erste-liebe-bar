<?php if ($data->animate() == "no-animation"): ?>
	<li class="sub-tile image" data-width="<?= Str::slug($data->width()->lower()) ?>-width" data-animation="no-animation" data-alignment="<?= Str::slug($data->alignment()->lower()) ?>">
	  <img src="<?= $data->image()->toFile()->url() ?>" />
	</li>
<?php elseif ($data->animate() == "animation"): ?>
	<li class="sub-tile image" data-width="<?= Str::slug($data->width()->lower()) ?>-width" data-animation="animation">
    <div style="background-image: url(<?= $data->image()->toFile()->url() ?>)"></div>
    <div style="background-image: url(<?= $data->image()->toFile()->url() ?>)"></div>
	</li>
<?php endif ?>