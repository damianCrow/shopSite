var menuicon = document.getElementById('menuicon');
var wrapper = document.getElementById('wrapper');
var menu = document.getElementById('menu');
var bannerimage = document.getElementById('bannerimage');
var banner = document.getElementById('banner');


window.onresize = removeMenuClass;

function removeMenuClass(){

	if(window.innerWidth > 1024){
 		menu.removeAttribute('class');
		wrapper.removeAttribute('class');
	}
}

menuicon.onclick = showHideMenu;

function showHideMenu(){

	if(menu.className !== 'show'){
		menu.className = 'show';
		wrapper.className = 'reducewidth';
	}
	else if(menu.className == 'show'){
		menu.className = 'hide';
		wrapper.className = 'increasewidth';
	}
	//else if(window.innerWidth <= 480){

	//	wrapper.style.width = 20 + '%';
	//}
	else{};
}

var bannerimagesource = ['assets/junkyard-gin-banner.jpg','assets/apparel-link.jpg'];

/*if(bannerimage.style.left < 300){
for(var i = 0; i < bannerimagesource.length; i++){

	if(bannerimagesource[i] == bannerimagesource.length){
		bannerimagesource[i] = bannerimagesource[0];
	}
	bannerimage.src = bannerimagesource[i];
	console.log(bannerimagesource[i]);	
}
}

function changebannerclass(){
	if(bannerimagesourceindex == bannerimagesource.length -1){
	bannerimagesourceindex = 0;
	}
	bannerimagesourceindex ++;
	bannerimage.src = bannerimagesource[bannerimagesourceindex];
	bannerimage2.className = 'bannerslideleft'
	bannerimage.className = 'nextbannerslide';
}*/

//bannerimage.addEventListener("webkitAnimationStart", nextbanner);
//bannerimage.addEventListener("animationstart", nextbanner);

window.onlload = nextbanner;

function nextbanner(){
	for(var i = 0; i < bannerimagesource.length - 1; i++){

		if(i == bannerimagesource.length - 1){
			i = 0;
		}
		var image = document.createElement('img');
		image.setAttribute('src', bannerimagesource[i]);
		image.className = 'bannerslideleft';
		banner.appendChild(image);
}

}





 