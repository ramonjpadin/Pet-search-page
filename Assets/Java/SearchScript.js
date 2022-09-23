var advBtn1 = $('#advBtn1');
var advBtn2 = $('#advBtn2');
var advQuer = $('#advQuer');
var supQuer = $('#supQuer');

var advShow = false;

advBtn1.click(function(e){
    if(advShow){
        e.preventDefault();
        advBtn2.addClass("hidden");
        advQuer.addClass("hidden");
        supQuer.addClass("hidden");
        advBtn1.text("Show Advanced Options");
        advShow = false;
    }else{
        e.preventDefault();
        advBtn2.removeClass("hidden");
        advQuer.removeClass("hidden");
        advBtn1.text("Hide Advanced Options");
        advShow = true;
    }

});

advBtn2.click(function(e){
        e.preventDefault();
        advBtn2.addClass("hidden");
        supQuer.removeClass("hidden");
        supShow = true;
});