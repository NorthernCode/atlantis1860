'use strict';


$('document').ready(function() {

	// $('.section').attr('data-stellar-ratio', '3');
	// $('#bg').attr('data-stellar-ratio', '0.5');
	// $.stellar();

    var controller = new ScrollMagic.Controller({globalSceneOptions: {triggerHook: "onEnter", duration: "200%"}});

    // build scenes
    new ScrollMagic.Scene({triggerElement: "#parallax1"})
                    .setTween("#parallax1 > div", {y: "80%", ease: Linear.easeNone})
                    .addIndicators()
                    .addTo(controller);

    new ScrollMagic.Scene({triggerElement: "#parallax2"})
                    .setTween("#parallax2 > div", {y: "80%", ease: Linear.easeNone})
                    .addIndicators()
                    .addTo(controller);

    new ScrollMagic.Scene({triggerElement: "#parallax3"})
                    .setTween("#parallax3 > div", {y: "80%", ease: Linear.easeNone})
                    .addIndicators()
                    .addTo(controller);



    // $('html, body').animate({
    //     scrollTop: window.innerHeight / 2 //50vh
    //     }, 1500); //TODO: then show the upper bar


    // $(document).scroll(function(){
    //     if(document.documentElement.clientHeight + $(document).scrollTop() >= document.body.offsetHeight ){
    //         $(document).scrollTop(0);
    //     }
    // });
});
