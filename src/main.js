/*
  FUNCTIONS
*/

function animateImages(targetElement) {
  let
    docViewTop = document.documentElement.scrollTop,
    docViewBottom = docViewTop + window.innerHeight / 2,
    elemTop = targetElement.offsetTop;
    elemBottom = elemTop + targetElement.clientHeight;

  if (elemTop <= docViewBottom && elemBottom > docViewTop) {
    targetElement.classList.add('in-viewport');
  } else {
    targetElement.classList.remove('in-viewport');
  }
}


/*
  MAIN
*/

window.addEventListener("load", function(e) { 	
	
  console.log('ERSTE LIEBE BAR');
  
  /*
    VARIABLES
  */
  
  let subTiles = document.querySelectorAll('.sub-tile');
  
  
  /*
    EXECUTION
  */
  
  subTiles.forEach((subTile) => {
    animateImages(subTile);
  });
  
});


window.addEventListener('scroll', function() {
  
  /*
    VARIABLES
  */
  
  const subTiles = document.querySelectorAll('.sub-tile');
  
  
  /*
    EXECUTION
  */
  
  subTiles.forEach((subTile) => {
    animateImages(subTile);
  });
});


