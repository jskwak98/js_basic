const title = document.querySelector(".eventHandlePractice");
console.log(title);



function handleTitleClick(){
    if (title.style.color === "blue"){
        title.style.color = "yellow";
    } else {
        title.style.color = "blue";
    }
}

function handleMouseEnter(){
    title.style.color = "white";
}

function handleMouseLeave(){
    title.style.color = "black";
}


title.addEventListener("click", handleTitleClick);
//listens for event, need to tell js which event it listens to

console.dir(title);
//by looking at properties, you can see which event this object has
// starts with 'on'

title.addEventListener("mouseenter", handleMouseEnter);
title.addEventListener("mouseleave", handleMouseLeave);

function handleWindowResize(){
    document.body.style.backgroundColor = "tomato";
    // you can get body, header, title using document
}
window.addEventListener("resize", handleWindowResize);


function handleWindowCopy(){
    alert("You copied");
}
window.addEventListener("copy", handleWindowCopy);

//connection events

function handleWindowOffline(){
    alert("You are offline");
}

window.addEventListener("offline", handleWindowOffline);

function handleWindowOnline(){
    alert("You are online");
}

window.addEventListener("online", handleWindowOnline);