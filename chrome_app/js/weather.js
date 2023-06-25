// browser gives you the geolocation based on the internet info
// needs two callbacks when success and when fail

function onGeoSuccess(position){
    //returns latitude, longitude, timestamp
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    // needs an openweathermap.org's account
    // needs geocoding api 
    const url = `https://api.openweathermap.org/data/3.0/onecall?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`;
    // you need some time until the reply comes
    // fetch url then, give response
    fetch(url).then(response => response.json()).then(data => {
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        city.innerText = data.name;
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    });

}

function onGeoError(){
    alert("Cannot retrieve weather or location info");
}
navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);