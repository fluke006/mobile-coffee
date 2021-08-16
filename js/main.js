const elHeader = document.querySelector('.header');
const elHamburger = document.querySelector('.header__hamburgerbtn');

elHamburger.addEventListener('click', () => {
	elHeader.classList.toggle('header--open');
});
