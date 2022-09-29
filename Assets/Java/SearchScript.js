var apiCode = "pSIHbptoz8mLgn5KonemY0MUsxaC0nsu3rRhAD3Kz19RVhwXlv";

//Query BTNs
var advBtn1 = $('#advBtn1');
var advBtn2 = $('#advBtn2');
var normQuer = $('#normQuer')
var advQuer = $('#advQuer');
var supQuer = $('#supQuer');

//Other BTNs
var searchBtn = $('#Quer');

var advShow = false;
var thisParams = getParams();
autoSelect(thisParams);

//Parameter Catching
function getParams() {
    var idx = document.URL.indexOf('?');
    var params = new Array();
    if (idx != -1) {
    var pairs = document.URL.substring(idx+1, document.URL.length).split('&');
    for (var i=0; i<pairs.length; i++) {
    nameVal = pairs[i].split('=');
    params[nameVal[0]] = nameVal[1];
       }
    }
    return params;
}

function autoSelect(pams){
    switch (pams.species){
        case "dog":
            $('#Species-1').prop( "checked", true );
            break;
        case "cat":
            $('#Species-2').prop( "checked", true );
            break;
        case "small%20animals":
            $('#Species-3').prop( "checked", true );
            break;
        case "other%20animals":
            //$('#Species-1').prop( "checked", true );
            break;
    }
}

//These two functions control the query accordion
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

//

searchBtn.click(function(e){

    var gQueryURL = "https://api.openweathermap.org/data/2.5/weather?lat=" + locale[0] + "&lon=" + locale[1] + "&appid=" + wAPIKey + "&units=imperial";

    fetch(gQueryURL)
    .then((response) => response.json())
    .then(function (data){
        console.log
    })
})

//
function CreateResult (img, name, species, breed){

}
