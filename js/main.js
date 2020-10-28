$(document).ready(function() {

    // reference
    var dropper = $('.dropper-menu > a');
    var dropMenu = $('.dropper-menu > .dropdown-menu');

    // click sul menu dropper > show/hide menu
    dropper.click(function() {
        $(this).next('.dropdown-menu').toggle();
    });

}); // fine doc ready


