$(document).ready(function () {
    let btn = document.querySelector('#btn-burger');
    let main = document.querySelector('main');
    let anchor = document.querySelectorAll('a');
    console.log(anchor);

    btn.addEventListener('click', () => {
         main.classList.toggle('non-visible');
    });

    $("#btn-burger, #overlay, a").on('click', function () {
        $("nav, main, body, #overlay, #btn-burger").toggleClass("open");
    });


});