// browser gives you the geolocation based on the internet info
// needs two callbacks when success and when fail

function onGeoSuccess(position){
    //returns latitude, longitude, timestamp
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    // needs an openweathermap.org's account
    // needs geocoding api 
    console.log(`You live in ${latitude} ${longitude}`);
}

function onGeoError(){
    alert("Cannot retrieve weather or location info");
}
navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);