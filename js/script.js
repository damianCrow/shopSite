var menuIcon = document.getElementById('menuicon');
var wrapper = document.getElementById('wrapper');
//var bannerImage = document.getElementById('bannerimage');
var banner = document.getElementById('banner');
var navBar = document.getElementById('navbar');
var navHeader = document.getElementById('navheader');
var navLinks = document.getElementById('navlinks');
var logo = document.getElementById('logo');
var menuCloseIcon = document.getElementById('menucloseicon');
var apparelPageRightColumn = document.getElementById('column2');
var bannerImageSource = [
	'assets/banner-junkyard-gin-new.jpg',
	'assets/banner-gold-edition-prints.jpg',
	'assets/junkyard-gin-banner.jpg'
];

if(window.innerWidth <= 1100){
	navBar.removeAttribute('class');
}
/*
menuCloseIcon.onclick = closeMenu;
function closeMenu(){
	navBar.className = 'menuhide menu';
	wrapper.className = 'slideright';
	navHeader.className = 'slideright';
	logo.className = 'slideright';
}
*/
window.onresize = removeMenuClass;

function removeMenuClass(){
	logo.removeAttribute('class');

	if(apparelPageRightColumn){
		apparelPageRightColumn.style.left = '50%';
	}
	
	if(window.innerWidth > 1100){
		wrapper.removeAttribute('class');
		navBar.className = 'navbarleft';
		navLinks.style.display = 'inherit';
	}
	else if(window.innerWidth <= 1100){
		navBar.removeAttribute('class');
		navLinks.style.display = 'none';
		wrapper.className = 'slideright';
		navHeader.className = 'slideright';
	}
	else{};
}

menuIcon.onclick = showHideMenu;
menuCloseIcon.onclick = showHideMenu;

function showHideMenu(){

	if(navBar.className !== 'menushow menu'){
		navBar.className = 'menushow menu';
		wrapper.className = 'slideleft';
		navHeader.className = 'slideleft';
		navLinks.style.display = 'inherit';
		logo.className = 'slideleft';
		if(apparelPageRightColumn){
		apparelPageRightColumn.style.left = '10%';
		}
	}
	else if(navBar.className == 'menushow menu'){
		navBar.className = 'menuhide menu';
		wrapper.className = 'slideright';
		navHeader.className = 'slideright';
		logo.className = 'slideright';
		if(apparelPageRightColumn){
		apparelPageRightColumn.style.left = '50%';
		}
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

document.addEventListener("DOMContentLoaded", nextBanner);

banner.style.width = 100 * bannerImageSource.length + '%';
var imageWidth = 100 / bannerImageSource.length + '%';

function nextBanner(){
	for(var i = 0; i < bannerImageSource.length; i++){

		var image = document.createElement('img');
		image.setAttribute('src', bannerImageSource[i]);
		image.style.width = imageWidth;
		image.style.float = 'left';
		image.className = 'bannerslide';
		if(i == bannerImageSource.length){
			i = 0;
		}
		banner.appendChild(image);
	}

}

console.log(apparelPageRightColumn);
	
