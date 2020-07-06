var myLazyLoad = new LazyLoad();

$( window ).on( "load", function() {
	introAnimation();
}); 

var tl = gsap.timeline({paused:true});
	tl.to(".preloader .logo", {width: '50px', ease: "power3.out", duration: 1, delay:1});
	tl.to(".preloader .background", {x: '100%', ease: "power3.inOut", duration: 2.2, onComplete:function(){ $('.preloader').hide();}});
	tl.fromTo(".featured-banner .first",{opacity:0, y:30}, {y:0, opacity: 1, duration: .75}, "-=.55");
	tl.fromTo(".featured-banner .second",{opacity:0, y:30}, {y:0, opacity: 1, duration: .65}, "-=.5");

function introAnimation() {
	tl.play();
}