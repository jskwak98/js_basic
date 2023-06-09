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
    title.style.color = "black";
}

function handleMouseLeave(){
    title.style.color = "white";
}


title.addEventListener("click", handleTitleClick);
//listens for event, need to tell js which event it listens to

console.dir(title);
//by looking at properties, you can see which event this object has
// starts with 'on'

title.addEventListener("mouseenter", handleMouseEnter);
title.addEventListener("mouseleave", handleMouseLeave);