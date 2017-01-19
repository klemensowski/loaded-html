// Barts html5 starter kit
$(document).ready(function(){
var windowWidth=$(window).width();windowWidth>=1200?(pc=!0,tablet=!1,phone=!1):480>=windowWidth?(pc=!1,tablet=!1,phone=!0):(pc=!1,tablet=!0,phone=!1);
	
        // Background
    $('[data-background]').each(function(index, element) {
        var backgroundSrc = $(this).data('background');
        $(this).backstretch(backgroundSrc);
    });
});
