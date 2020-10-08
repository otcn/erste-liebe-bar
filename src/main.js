/*
  FUNCTIONS
*/

function animateImages(targetElement) {
  let
    docViewTop = document.documentElement.scrollTop,
    docViewBottom = docViewTop + window.innerHeight / 2,
    elemTop = targetElement.offsetTop;

  if (elemTop <= docViewBottom) {
    targetElement.classList.add('in-viewport');
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


