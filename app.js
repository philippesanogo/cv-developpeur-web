$(document).ready(function () {
    $("#btn-burger").on('click', function() {
        $("nav, main, body, #overlay").toggleClass("open");
    });
});