const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');
const navLogo = document.querySelector('#navbar__logo');

// Display mobile menu
const mobileMenu = ()=>{
	menu.classList.toggle('is-active');
	menuLinks.classList.toggle('active');
}

// console.log("yes");

menu.addEventListener('click', mobileMenu);

// Show active menu when scrolling
const highlightMenu = ()=>{
	const elem = document.querySelector('.highlight');
	const homeMenu = document.querySelector('#home-page');
	const about = document.querySelector('#about-page');
	const projects = document.querySelector('#projects-page');

	let scroll = window.scrollY;

	// console.log(scroll, "yes");

	// adds the highlight class to my menu items
	if(window.innerWidth > 960 && scroll < 600){
		// console.log('home', homeMenu);
		homeMenu.classList.add('highlight');
		about.classList.remove('highlight');
		return;
	} else if(window.innerWidth > 960 && scroll < 1400){
		// console.log('about', about);
		about.classList.add('highlight');
		homeMenu.classList.remove('highlight');
		projects.classList.remove('highlight');
		return;
	} else if(window.innerWidth > 960 && scroll < 2345){

		// console.log('projects', projects);
		projects.classList.add('highlight');
		about.classList.remove('highlight');
		return;
	}

	if((elem && window.innerWidth<960 && scroll<600) || (elem)){
		elem.classList.remove('highlight'); 
	}
}

window.addEventListener('click', highlightMenu);
window.addEventListener('scroll', highlightMenu);


// close mobile menu after item selection
const hideMobileMenu =()=>{
	const menuBars = document.querySelector('.is-active');
	// console.log("injam", menuBars);
	if(window.innerWidth<=768  && menuBars){
		menu.classList.toggle('is-active'); 
		menuLinks.classList.remove('active');
	}
}

menuLinks.addEventListener('click', hideMobileMenu);
navLogo.addEventListener('click', hideMobileMenu);
