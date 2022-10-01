const burgerIcon = document.querySelector('#burger');
const navbarMenu = document.querySelector('#nav-links');

burgerIcon.addEventListener('click', () => {
    navbarMenu.classList.toggle('is-active');
});


var apiCode = "pSIHbptoz8mLgn5KonemY0MUsxaC0nsu3rRhAD3Kz19RVhwXlv";

//Query BTNs
var advBtn1 = $('#advBtn1');
var advBtn2 = $('#advBtn2');
var advQuer = $('#advQuer');
var supQuer = $('#supQuer');

//Other BTNs
var searchBtn = $('#supQuer');

var advShow = false;

//These two functions control the query accordion
advBtn1.click(function (e) {
    if (advShow) {
        e.preventDefault();
        advBtn2.addClass("hidden");
        advQuer.addClass("hidden");
        supQuer.addClass("hidden");
        advBtn1.text("Show Advanced Options");
        advShow = false;
    } else {
        e.preventDefault();
        advBtn2.removeClass("hidden");
        advQuer.removeClass("hidden");
        advBtn1.text("Hide Advanced Options");
        advShow = true;
    }

});

advBtn2.click(function (e) {
    e.preventDefault();
    advBtn2.addClass("hidden");
    supQuer.removeClass("hidden");
    supShow = true;
});

//
