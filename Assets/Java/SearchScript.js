//api codes
var apiCode = "pSIHbptoz8mLgn5KonemY0MUsxaC0nsu3rRhAD3Kz19RVhwXlv";
var sApiCode = "jaUgYeFFgUvh3pKQdoHBtw0Iw9eDAXjwfmFfDhVt";

//Query BTNs
var advBtn1 = $('#advBtn1');
var normQuer = $('#normQuer')
var advQuer = $('#advQuer');

//Other BTNs
var searchBtn = $('#searchBtn');

//containers
var petContainer = $('#petContainer');

//initializing
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

//checks boxes based on previous link
function autoSelect(pams){
    switch (pams.species){
        case "dog":
            $('#Species-1').prop( "checked", true );
            break;
        case "cat":
            $('#Species-2').prop( "checked", true );
            break;
        case "small%20animals":
            $('#Species-4').prop( "checked", true );
            break;
    }
}

//These two functions control the query accordion
advBtn1.click(function(e){
    if(advShow){
        e.preventDefault();
        advQuer.addClass("hidden");
        advBtn1.text("Show Advanced Options");
        advShow = false;
    }else{
        e.preventDefault();
        advQuer.removeClass("hidden");
        advBtn1.text("Hide Advanced Options");
        advShow = true;
    }

});

//Search
searchBtn.click(function(e){
    e.preventDefault();

    //emptys container's previous contents
    petContainer.empty()

    //Url elements
    var gQueryURL = "https://api.petfinder.com/v2/animals?";
    var querys = {};

    //getting queries
    querys.type = getSpecies();
    querys.age = getAge()
    querys.size = getSize();
    querys.gender = getGender();

    var otherQuers = getOther();
    querys.good_with_children = otherQuers[0];
    querys.good_with_dogs = otherQuers[1];
    querys.good_with_cats = otherQuers[2];
    querys.house_trained = otherQuers[3];
    querys.declawed = otherQuers[4];
    querys.special_needs = otherQuers[5];

    //calling API
    Object.keys(querys).forEach(key => {
        if (querys[key] === '') {
          delete querys[key];
        }
      });

    fetch("https://api.petfinder.com/v2/oauth2/token", {
        body: "grant_type=client_credentials&client_id=" + apiCode + "&client_secret=" + sApiCode,
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        method: "POST"
    })
    .then((response) => response.json())
    .then(function (bear){
        fetch(gQueryURL + new URLSearchParams(querys), {
            headers: {
                Authorization: "Bearer " + bear.access_token
            }
        })
        .then((response) => response.json())
        .then(function (data){
            //data retrived

            //loops through data
            for(i=0; i < 20; i++){
                //getting all needed data from specific pet
                try{
                    var petImage = data.animals[i].photos[0].full;
                }
                catch(ex){
                    var petImage = "none";
                }
                var petName = data.animals[i].name;
                var petSpecies = data.animals[i].species;
                var petBreed = data.animals[i].breeds.primary;
                var petUrl = data.animals[i].url;

                //creating result
                CreateResult(petImage, petName, petSpecies, petBreed, petUrl);
            }
        })
    })
})

//Creates the listing
function CreateResult (img, name, species, breed, url){
    //initializing elements
    var linkEl = $('<a>');
    var containerEl = $('<div>');
    var nameEl = $('<h1>');
    var descEl = $('<h2>');

    //link
    linkEl.attr("href", url);

    //image
    if (img != "none"){
        containerEl.css("background-image",'url("' + img + '")');
    }
    linkEl.append(containerEl);

    //name
    nameEl.text(name);
    containerEl.append(nameEl);

    //species and breed
    descEl.text(species + " - " + breed);
    containerEl.append(descEl);

    //push to the container
    petContainer.append(linkEl)
}


//all below functions are used to get the querys
function getSpecies(){
    if ($('#Species-1').is(":checked")){
        return "dog"
    }
    if ($('#Species-2').is(":checked")){
        return "cat"
    }
    if ($('#Species-3').is(":checked")){
        return "rabbit"
    }
    if ($('#Species-4').is(":checked")){
        return "small & furry"
    }
    if ($('#Species-5').is(":checked")){
        return "horse"
    }
    if ($('#Species-6').is(":checked")){
        return "bird"
    }
    if ($('#Species-7').is(":checked")){
        return "scales, fins & other"
    }
    if ($('#Species-8').is(":checked")){
        return "Barnyard"
    }
    return "";
}

function getAge(){
    fullString = "";

    if ($('#Age-1').is(":checked")){
        fullString += ",baby"
    }
    if ($('#Age-2').is(":checked")){
        fullString += ",young"
    }
    if ($('#Age-3').is(":checked")){
        fullString += ",adult"
    }
    if ($('#Age-4').is(":checked")){
        fullString += ",senior"
    }

    fullString = fullString.substring(1);
    return fullString
}

function getSize(){
    fullString = "";

    if ($('#Size-1').is(":checked")){
        fullString += ",small"
    }
    if ($('#Size-2').is(":checked")){
        fullString += ",medium"
    }
    if ($('#Size-3').is(":checked")){
        fullString += ",large"
    }
    if ($('#Size-4').is(":checked")){
        fullString += ",extra large"
    }

    fullString = fullString.substring(1);
    return fullString
}

function getGender(){
    fullString = "";

    if ($('#Gender-1').is(":checked")){
        fullString += ",male"
    }
    if ($('#Gender-2').is(":checked")){
        fullString += ",female"
    }
    if ($('#Gender-3').is(":checked")){
        fullString += ",Unknown"
    }

    fullString = fullString.substring(1);
    return fullString
}

function getOther(){
    var fullvalues = [];
    fullvalues[0] = $('#Children').find(":selected").text();
    fullvalues[1] = $('#Dogs').find(":selected").text();
    fullvalues[2] = $('#Cats').find(":selected").text();
    fullvalues[3] = $('#House').find(":selected").text();
    fullvalues[4] = $('#Declawed').find(":selected").text();
    fullvalues[5] = $('#Special').find(":selected").text();

    for (i=0; i < 6; i++){
        if(fullvalues[i] == 'No'){
            fullvalues[i] = 'false';
        } else if(fullvalues[i] == 'Yes'){
            fullvalues[i] = 'true';
        } else{
            fullvalues[i] = '';
        }
    }

    return fullvalues;
}
