(() => {
console.log("javascript linked up");

		const burger 	= document.getElementById('burgerMenu'),
			  nav    	= document.querySelector('.headerNav'),
			  hero	 	= document.getElementById('heroTitle'),
			  lightbox	= document.querySelector('.lightbox'),
			  gallery	= ['url(images/gallery/1.jpg)', 'url(images/gallery/2.jpg)', 'url(images/gallery/3.jpg)', 'url(images/gallery/4.jpg)', 'url(images/gallery/5.jpg)'],
			  main		= document.querySelector('.mainImg'),
			  thumbnail	= document.querySelectorAll('.thumbnail'),
			  close 	= document.querySelector('.close'),
			  gDiv		= document.getElementById('gallery');

	function showNav(){
		nav.classList.toggle('hidden');

		burger.classList.toggle('rotate');
	};

	function showHero(){
		TweenMax.to(hero, 1,{
			opacity: 1,
			y: -10,
		});
	}

	window.addEventListener('load', showHero);
	burger.addEventListener('click', showNav);

	function swapImg(){
		let mainSrc = this.className.split(" ")[1];

		if(mainSrc == 't1'){
			main.style.backgroundImage = gallery[0];
		}

		if(mainSrc == 't2'){
			main.style.backgroundImage = gallery[1];
		}

		if(mainSrc == 't3'){
			main.style.backgroundImage = gallery[2];
		}

		if(mainSrc == 't4'){
			main.style.backgroundImage = gallery[3];
		}

		if(mainSrc == 't5'){
			main.style.backgroundImage = gallery[4];
		}
	}

	function closeGallery(){
		lightbox.classList.add('hidden');
	}

	function openGallery(){
		lightbox.classList.remove('hidden');
	}

	close.addEventListener('click', closeGallery);
	gDiv.addEventListener('click', openGallery);


	thumbnail.forEach(thumb => thumb.addEventListener('click', swapImg));

	
})();