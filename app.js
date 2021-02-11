$(document).ready(function () {
    $("#btn-burger, #overlay").on('click', function() {
        $("nav, main, body, #overlay").toggleClass("open");
    });
});