'use strict';


$('document').ready(function() {
    $('#fullpage').fullpage({
        anchors: ['etusivu', 'liput', 'tarina', 'hahmot', 'tekijat', 'yhteistyossa'],
        navigation: true,
				navigationPosition: 'right',
        menu: '#menu',
        css3: true,
        scrollingSpeed: 1000,
        scrollOverflow: true
    });
    //$.fn.fullpage.setMouseWheelScrolling(false);
    //$.fn.fullpage.setAllowScrolling(false);

});

$("#menu-mobile select").change(function() {
  window.location = $(this).find("option:selected").val();
});
