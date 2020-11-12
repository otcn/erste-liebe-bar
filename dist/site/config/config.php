<?
	c::set('debug', true);
  
  return [
    'hooks' => [
        'kirbytext:before' => function ($text) {
          return preg_replace('/(\d+|td)/', '<span class="number">$1</span>', $text);
          //return $text;
        }
    ]
  ]
?>