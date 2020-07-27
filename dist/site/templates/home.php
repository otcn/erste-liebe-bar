<?php snippet('header') ?>

<ol class="tiles">
	<?php foreach ($page->layoutbuilder()->toBuilderBlocks() as $block): ?>
		<?php $subblocks = $block->tilebuilder()->toBuilderBlocks(); ?>
		
		<li class="tile">
			<?php if($subblocks->count() == 2 || $subblocks->_key() == 'moduleimage' || $subblocks->width() == true): ?>
			<ol class="sub-tiles" data-layout="vertical">
			<?php else: ?>
			<ol class="sub-tiles" data-layout="horizontal">
			<?php endif ?>
			
				<?php foreach($subblocks as $subblock): ?>
					<?php snippet('blocks/' . $subblock->_key(), array('data' => $subblock)) ?>
				<?php endforeach ?>
					
			</ol>
		</li>
	<?php endforeach ?>
</ol>