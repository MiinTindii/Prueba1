$(document).ready(function () {
    function showPosition(position) {
        var lat = position.coords.latitude;
        var lon = position.coords.longitude;
        console.log(lat);
        console.log(lon);
        var urlLugar = `https://www.metaweather.com/api/location/search/?lattlong=${lat},${lon}`
        console.log(urlLugar);

    
        $.get(urlLugar,function(Lugares){
            console.log(Lugares[0]);
            

        });
        

      }
        if (navigator.geolocation){
            navigator.geolocation.getCurrentPosition(function(posision){
            showPosition(posision);
        })
  
          }else{
            alert("navergador no soporta la geolocalizacion")
          }
  
    })