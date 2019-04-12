(() => {
console.log("javascript linked up");

		const burger = document.getElementById('burgerMenu'),
			  nav    = document.querySelector('.headerNav');

	function showNav(){
		nav.classList.toggle('hidden');

		burger.classList.toggle('rotate');
	};

	burger.addEventListener('click', showNav);
})();