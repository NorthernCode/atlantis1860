   'use strict';

   $('document').ready(function() {
    $('html, body').animate({
        scrollTop: $('#bg').offset().top
    }, 1500);


    $(document).scroll(function(){
        if(document.documentElement.clientHeight +
            $(document).scrollTop() >= document.body.offsetHeight ){$(document).scrollTop(0);
        }});
    });
