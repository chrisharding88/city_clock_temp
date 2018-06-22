// JavaScript source code

$(document).ready(function () {

    function weather() {
        var URL = 'https://fcc-weather-api.glitch.me/api/current?lat=39.7392&lon=-104.9903';
        $.getJSON(URL, function (data) {
            console.log(data);
            updateDOM(data);
        });
    }
    weather();
    function updateDOM(data) {
        var desc = data.weather[0].description;
        const Ftemp = parseFloat(data.main.temp * 1.8 + 32).toFixed(0) + "&#176" + "F";
        $('#temp').html(Ftemp);
        $('#desc').html(desc);
    }

});