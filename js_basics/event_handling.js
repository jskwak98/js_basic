const title = document.querySelector(".eventHandlePractice");
console.log(title);



function handleTitleClick(){
    if (title.style.color === "blue"){
        title.style.color = "yellow";
    } else {
        title.style.color = "blue";
    }
}

title.addEventListener("click", handleTitleClick);
//listens for event, need to tell js which event it listens to