$(document).ready(function () {
    function showPosition(position) {
        var lat = position.coords.latitude;
        var lon = position.coords.longitude;
        console.log(lat);
        console.log(lon);
        var urlLugar = `https://www.metaweather.com/api/location/search/?lattlong=${lat},${lon}`
        console.log(urlLugar);

    
        $.get(urlLugar,function(Lugares){
            console.log(Lugares[0].woeid);
            var urlClima = `https://www.metaweather.com/api/location/${Lugares[0].woeid}`
            console.log(urlClima);
            $.get(urlClima,function(Tiempos){
                console.log(Tiempos.consolidated_weather[0].max_temp)
                var temp = Tiempos.consolidated_weather[0].max_temp;
                var urlImagen = `https://www.metaweather.com/static/img/weather/ico/${Tiempos.consolidated_weather[0].weather_state_abbr}.ico`
                $("#temp").append(`${temp}<img src= "${urlImagen}"></img>`);
            })
        

        });
        

      }
        if (navigator.geolocation){
            navigator.geolocation.getCurrentPosition(function(posision){
            showPosition(posision);
        })
  
          }else{
            alert("El navegador no es compatible")
          }
  
    })