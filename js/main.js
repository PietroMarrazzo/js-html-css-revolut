$(document).ready(function() {

    // reference
    var dropper = $('.dropper-menu > a');
    var dropMenu = $('.dropper-menu > .dropdown-menu');

    // click sul menu dropper > show/hide menu
    dropper.click(function() {

        // reference sul menu droppato attivo
        var activeDrop = $(this).next('.dropdown-menu');

        // nascondo tutti i menu droppati NON attivi
        dropMenu.not(activeDrop).hide();

        
        // toggle sul menu droppato attivo
        activeDrop.toggle()
             

    });


}); // fine doc ready


