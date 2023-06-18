const clock = document.querySelector("#clock");


function getClock() {
    //interval
    const date = new Date();
    clock.innerText = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
}

getClock();
setInterval(getClock, 1000);

//set timeout, function executes after Xms.

//Date object is used for time calling