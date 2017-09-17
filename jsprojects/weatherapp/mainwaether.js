
var API_KEY = "346f61a70b67803aca8375b86718652c";
var cel = false;
var loc;
var wd;

function displayTemp(fTemp, c) {   
    if(c) return (fTemp * 1,8 +32) + " F";
    return fTemp + " C";
}

function render(wd, cel){
                    
                var currentLocation = wd.name;
                var currenWeather = wd.weather[0].description;
                var currentTemp =displayTemp(wd.main.temp, cel);
                var high = displayTemp(wd.main.temp_max, cel);
                var low = displayTemp(wd.main.temp_min, cel);
        
                var icon = wd.weather[0].icon;

                $('#currentLocation').html(currentLocation);
                $('#currentTemp').html(currentTemp);
                $('#currenWeather').html(currenWeather);
                $('#high-low').html(high + ' / ' + low);
                
                var iconSrc = "http://openweathermap.org/img/w/" + icon + ".png";
                
                $('#currentTemp').prepend('<img src="' +iconSrc  + '">');
}


$(function () {
        var loc;
        $.getJSON('https://ipinfo.io', function (d) {
            loc = d.loc.split(',');
            $.getJSON('http://api.openweathermap.org/data/2.5/weather?units=metric&lat=' + loc[0] +
                '&lon=' + loc[1] + '&APPID=' + API_KEY
                , function (apiData) {
                wd = apiData;
                render(apiData, cel);
                $('#toggle').click(function(){
                    cel = !cel;
                    render(wd, cel);
                })
                
                })
        })
    })
    