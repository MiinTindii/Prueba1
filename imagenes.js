$(document).ready(function () {
    $.get("https://api.artic.edu/api/v1/artworks",
        function (data) {
            console.log(data);
        }
    );


});