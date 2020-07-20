document.addEventListener("DOMContentLoaded", function(e) { 	
	console.log('KIKO KOSTADINOV 00102021 SIROKKÓ');
	
	const aClass = 'active';
	const invisibleClass = 'invisible';
	const hideClass = 'hidden';
	const galleryEl = document.querySelector('#gallery');
	const primary = document.querySelector('#primary');
	const secondary = document.querySelector('#secondary');
	const prevButton = document.querySelector('#prevButton');
	const nextButton = document.querySelector('#nextButton');
	const max = primary.children.length-1;
	const stackMax = 3;
	
	// press overlay
	pressLink = document.querySelector('.pressOverlay a'),
	pressContent = document.querySelector('.pressOverlay article');
	
	let current = 0;
	let stack = [];
	
	// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
	let vh = window.innerHeight * 0.01;
	
	// Then we set the value in the --vh custom property to the root of the document
	document.documentElement.style.setProperty('--vh', `${vh}px`);
	
	// setup gallery
	active = primary.firstElementChild;
	active.classList.add(aClass);
		
	// transition stuff
	const listener = e => {
		if ((e.target === curtain)) {
			curtain.classList.add(hideClass);
		}
	};
	
	const fadeOut = function (e) {
		e.addEventListener('transitionend', listener);
		e.classList.add(invisibleClass);
		Array.from(primary.children).forEach((e) => {
			e.firstElementChild.src = e.firstElementChild.getAttribute('data-src');
		})
	}
	
	primary.firstElementChild.classList.add(aClass);
	
	let updateGallery = function(active, target, rev) {
		active.classList.remove(aClass);
		primary.children[target].classList.add(aClass);
				
		if (!rev) {
			stack.push(primary.children[target].getAttribute('data-slide'));
		} else {
			stack.unshift(primary.children[target].getAttribute('data-slide'));
		}
		
		if (stack.length > stackMax) {
			if (!rev) {
				stack.shift();
			} else {
				stack.pop();
			}
		}

		Array.from(document.querySelectorAll('[data-dither]')).forEach((item)=>{
			item.classList.remove(aClass);
		})
		
		// make stack from stack array
		stack.forEach(i => {
			i = i-1;
			
			if (i < 0) {
				i = max;
			} else if (i > max) {
				i = 0;
			}
			
			// rotate stack
			const el = document.querySelector('[data-dither="'+i+'"]');
			if (el.style.transform.length == 0) {
				let rot = Math.floor(Math.random() * 3) + 1;
				rot *= Math.floor(Math.random()*2) == 1 ? 1 : -1;
		

				el.style.transform = 'rotate('+rot+'deg)';
			}
			el.classList.add(aClass);

		});
	}
	
	let advanceGallery = function(rev) {
		const active = primary.getElementsByClassName(aClass)[0];

		if (!rev) {
			if (active.nextElementSibling) {
				current++;
			} else {
				current = 0;
			}			
		
		// reverse gallery
		} else {
			
			if (active.previousElementSibling) {
				current--;
			} else {
				current = max;
			}
		}
		
		if (current > 0) {
			prevButton.classList.remove(invisibleClass);
		}
		
		updateGallery(active, current, rev);
	}
	
	prevButton.classList.add(invisibleClass);
		
	window.addEventListener("load", function(e) { 
		primary.firstElementChild.firstElementChild.src = primary.firstElementChild.firstElementChild.getAttribute('data-src');
		fadeOut(curtain);
	})
	
	// event listeners
	primary.addEventListener('click', ()=>{advanceGallery(false)});
	nextButton.addEventListener('click', ()=>{advanceGallery(false)});
	secondary.addEventListener('click', ()=>{advanceGallery(true)});
	prevButton.addEventListener('click', ()=>{advanceGallery(true)});
	
	// Press overlay
	/*
	pressLink.addEventListener('click', ()=> {
		pressContent.classList.toggle(hideClass);		
		galleryEl.classList.toggle(hideClass);
		pressLink.textContent = pressLink.textContent == "Press release" ? "Close" : "Press release";
	});
	*/
	
	
})