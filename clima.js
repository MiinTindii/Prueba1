$(document).ready(function () {
    console.log("JQuery esta activo ");

    function showPosition(position) {
        var lat = position.coords.latitude;
        var lon = position.coords.longitude;

            console.log(lat);
            console.log(lon);


    }



});