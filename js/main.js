(() => {
console.log("javascript linked up");

		const burger = document.getElementById('burgerMenu'),
			  nav    = document.querySelector('.headerNav'),
			  hero	 = document.getElementById('heroTitle');

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
})();