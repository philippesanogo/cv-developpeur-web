$(document).ready(function () {
    $("#btn-burger, #overlay, a").on('click', function() {
        $("nav, main, body, #overlay, #btn-burger").toggleClass("open");
    });
});