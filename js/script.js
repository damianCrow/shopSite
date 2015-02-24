var menuIcon = document.getElementById('menuicon');
var wrapper = document.getElementById('wrapper');

// the 'bannerImage' variable is never used.
var bannerImage = document.getElementById('bannerimage');

var banner = document.getElementById('banner');
var navBar = document.getElementById('navbar');
var navHeader = document.getElementById('navheader');
var navLinks = document.getElementById('navlinks');
var logo = document.getElementById('logo');
var menuCloseIcon = document.getElementById('menucloseicon');
var bannerImageSource = [
	'assets/banner-junkyard-gin-new.jpg',
	'assets/banner-gold-edition-prints.jpg',
	'assets/junkyard-gin-banner.jpg'
];

if(window.innerWidth <= 1024){
	navBar.removeAttribute('class');
}
menuCloseIcon.onclick = closeMenu;
function closeMenu(){
	navBar.className = 'menuhide menu';
	wrapper.className = 'slideright';
	navHeader.className = 'slideright';
	logo.className = 'slideright';
}

// I don't think you need this resize listener/handler at all.
// Everything you are doing here could be done with CSS and
// media queries alone.
window.onresize = removeMenuClass;

function removeMenuClass(){
	logo.removeAttribute('class');
	
	if(window.innerWidth > 1024){
		wrapper.removeAttribute('class');
		navBar.className = 'navbarleft';
		navLinks.style.display = 'inherit';
	}
	else if(window.innerWidth <= 1024){
		navBar.removeAttribute('class');
		navLinks.style.display = 'none';
		wrapper.className = 'slideright';
		navHeader.className = 'slideright';
	}
	else{};
}

menuIcon.onclick = showHideMenu;

function showHideMenu(){

	// You don't need to use classNames for checking something like this.
	// instead, create a variable such is 'isNavOpen', and flick it between
	// true and false, e.g.
	// if (isNavMenuOpen) {

	// 	/* change classNames */
	// 	isNavMenuOpen = false;
	// }
	// else {

	// 	/* change classNames */
	// 	isNavMenuOpen = true;
	// }
	if(navBar.className !== 'menushow menu'){
		navBar.className = 'menushow menu';
		wrapper.className = 'slideleft';
		navHeader.className = 'slideleft';
		navLinks.style.display = 'inherit';
		logo.className = 'slideleft';
	}
	else if(navBar.className == 'menushow menu'){
		navBar.className = 'menuhide menu';
		wrapper.className = 'slideright';
		navHeader.className = 'slideright';
		logo.className = 'slideright';
	}
	else{};
}

/*if(bannerimage.style.left < 300){
for(var i = 0; i < bannerImageSource.length; i++){

	if(bannerimagesource[i] == bannerimagesource.length){
		bannerimagesource[i] = bannerimagesource[0];
	}
	bannerimage.src = bannerimagesource[i];
	console.log(bannerimagesource[i]);	
}
}
*/

	
//bannerimage.addEventListener("webkitAnimationStart", nextbanner);
//bannerimage.addEventListener("animationstart", nextbanner);

// don't mix single and double quotes in your project.
// also, why is this called 'nextBanner'? That name doesn't really coincide with
// what this function does. something like 'createBanner', or 'init' would be better.
document.addEventListener("DOMContentLoaded", nextBanner);

banner.style.width = 100 * bannerImageSource.length + '%';
var imageWidth = 100 / bannerImageSource.length + '%';

function nextBanner(){
	for(var i = 0; i < bannerImageSource.length; i++){

		var image = document.createElement('img');
		image.setAttribute('src', bannerImageSource[i]);
		image.style.width = imageWidth;

		// set the float using the CSS class. There's no need to do it with JS.
		image.style.float = 'left';


		image.className = 'bannerslide';

		// use triple equals, instead of double, for this kind of comparison.
		// also, why are you reseting the variable 'i'? It seems pointless here...
		if(i == bannerImageSource.length){
			i = 0;
		}

		banner.appendChild(image);
	}

}


	
