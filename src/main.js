/*
  FUNCTIONS
*/

function animateImages(targetElement) {
  let
    docViewTop = document.documentElement.scrollTop,
    docViewBottom = docViewTop + window.innerHeight / 2,
    elemTop = targetElement.offsetTop,
    elemParentTop = targetElement.parentElement.parentElement.offsetTop,
    elemBottom = elemTop + targetElement.clientHeight;

  if(window.innerWidth > 700) {
    if (elemTop <= docViewBottom && elemBottom > docViewTop) {
      targetElement.classList.add('in-viewport');
    } else {
      targetElement.classList.remove('in-viewport');
    }
  } else {
    if (elemParentTop < docViewTop + 60) {
      targetElement.classList.add('in-viewport');
    } else {
      targetElement.classList.remove('in-viewport');
    }
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
  
  let subTiles = document.querySelectorAll('.sub-tile'),
      menu = document.querySelector('#menu'),
      anchorLinks = document.querySelectorAll('.anchor');
  
  
  /*
    EXECUTION
  */
  
  subTiles.forEach((subTile) => {
    animateImages(subTile);
  });
  
  anchorLinks.forEach((anchorLink) => {
    
    anchorLink.addEventListener('click', function(e) {
      
      menu.classList.toggle('hidden');
      
    })
    
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


