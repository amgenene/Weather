$(document).ready(function(){
   if (navigator.geolocation) {
     var long;
     var fTemp;
     var cTemp;
     var ktemp;
     var lat;
     var weatherTemp;
     var cTemp;
     var tempSwap = true;
     //$.getJSON("http:ip-api.com/json", function(data2){
       //lat=data2.lat;
       //long=data2.lon;
     //});    
     navigator.geolocation.getCurrentPosition(function(position) {
     long = position.coords.longitude;
     lat = position.coords.latitude;
     var api = "https://api.darksky.net/forecast/0db5716e6ddb6c142ac038a22893599f/" + lat + "," + long + "?callback=?";
     $.getJSON(api, function(forecast) {
      
      weatherTemp = forecast.currently.temperature;
       cTemp = ((weatherTemp-32)*(5/9)).toFixed(0);
      var windType = "The wind Speed is:" + " "+ forecast.currently.windSpeed;
       var humidity = "The Humidity is at:" +" " + forecast.currently.humidity*100 +"%"; 
       var cloudCover ="And the cloud cover is at:" + forecast.currently.cloudCover*100 +"%";
       
     $("#api").html(api);
     $("#temp").html("Current Temperature:" + " " + weatherTemp +"°F");     $("#weatherType").html(windType);
     $("#humidity").html(humidity);
     $("#cloudCover").html(cloudCover);
     $("#temp").click(function(){
      if(tempSwap===false){
        $("#temp").html(cTemp + "°C");
        tempSwap=true;
      }
       else{
         $("#temp").html(weatherTemp +"°F");
        tempSwap=false;
         
       }
           console.log(api);

     });
       if(forecast.currently.precipProbability > 0){
    $("body").css("background-image", "url(https://forestnation.com/wp-content/uploads/2016/05/raining.jpg)");
  }
  else if(weatherTemp > 80 || cTemp > 26.6){
    $("body").css("background-image", "url(http://www.mrwallpaper.com/wallpapers/blue-sunny-sky.jpg)");
  }
  else if(forecast.currently.precipIntensity > 0.5){
   $("body").css("background-image", "url(https://asset.lasvegassun.com/media/assets/images/wallpaper/general_wallpaper/20101116_lightning_1280x800.jpg)");
 }
  
 else if(forecast.currently.precipIntensity > 0.5){
   $("body").css("background-image", "url(https://asset.lasvegassun.com/media/assets/images/wallpaper/general_wallpaper/20101116_lightning_1280x800.jpg)");
 }
  else if(weatherTemp > 70 && weatherTemp < 80){
    $("body").css("background-image", "url(https://www.gannett-cdn.com/-mm-/6788578e25b6a3c8361d1c397c985a2656121b55/c=0-104-2045-1259&r=x633&c=1200x630/local/-/media/2016/10/27/TXGroup/Abilene/636131711314425199-realestatebackground.jpg)");
  }
  else if(weatherTemp > 60 && weatherTemp < 70){
    $("body").css("background-image", "url(https://asset.lasvegassun.com/media/assets/images/wallpaper/general_wallpaper/20110119_strat2_1680x1050.jpg");
  }
  else if(weatherTemp > 50 && weatherTemp < 60){
     $("body").css("background-image", "url(http://www.post-gazette.com/image/2016/07/19/1140x_q90_a10-7_cTC_ca48,30,2198,1439/PolarVortext0719-1-1.jpg)");
  }
  else if(weatherTemp > 40 && weatherTemp < 50){
    $("body").css("background-image", "url(https://www.agilityrecovery.com/wp-content/uploads/2017/03/Spring_Storm.jpg)");
  }
  else if(weatherTemp > 30 && weatherTemp < 40){
    $("body").css("background-image", "url(https://scontent.cdninstagram.com/t51.2885-15/sh0.08/e35/12822443_240757939590125_1061696274_n.jpg?ig_cache_key=MTE5OTUyODc5NzQ0NjMwNjEyMA%3D%3D.2)");
  }
  });
  });
   }
});
