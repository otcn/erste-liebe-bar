    <? snippet('header') ?>

    <ol class="tiles">
    	
      <? $i = 0; foreach ($page->layoutbuilder()->toBuilderBlocks() as $block): ?>
    		
        <?
          $subblocks = $block->tilebuilder()->toBuilderBlocks();
          $hasAnimation = false;
          $isFullWidth = false;
          
          foreach($subblocks as $subblock) {
            
            // If one of the blocks in animated
            if ($subblock->animate() == 'animation') {
              $hasAnimation = true;
            }
            
            // If one of the blocks is full width
            if ($subblock->width() == 'full') {
              $isFullWidth = true;
            }
          }
        ?>
        
        <? if($i%2 == 0): ?>
    		<li class="tile" data-position="left">
        <? else: ?>
        <li class="tile" data-position="right">
        <? endif ?>
    
    			<?php if($subblocks->count() == 2): ?>
    			
            <?php if($isFullWidth): ?>
            <ol class="sub-tiles" data-layout="horizontal">
            <?php else: ?>
            <ol class="sub-tiles" data-layout="vertical">
            <?php endif ?>
            
    			<?php else: ?>
    			<ol class="sub-tiles" data-layout="horizontal">
    			<?php endif ?>
    			
    				<?php foreach($subblocks as $subblock): ?>
    					<?php snippet('blocks/' . $subblock->_key(), array('data' => $subblock)) ?>
    				<?php endforeach ?>
    					
    			</ol>
    		</li>
    
    	<?php $i++; endforeach ?>
      
    </ol>
    
    <?= js(['assets/js/main.min.js', '@auto']) ?>
  </body>
</html>