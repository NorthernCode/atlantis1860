   'use strict';

$('document').ready(function() {
    $('html, body').animate({
        scrollTop: $('#bg').offset().top
        }, 1500); //TODO: then show the upper bar


    $(document).scroll(function(){
        if(document.documentElement.clientHeight + $(document).scrollTop() >= document.body.offsetHeight ){
            $(document).scrollTop(0);
        }
    });
});
