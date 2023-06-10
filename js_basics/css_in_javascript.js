const title = document.querySelector(".eventHandlePractice");

function handleTitleClick(){
    //"clicked" string is called raw value and it can be the cause of error
    const clickedClass = "clicked";
    if (title.className === clickedClass){
        title.className = "eventHandlePractice";
    } else {
        title.className = clickedClass;
    }
}

function handleTitleClickList(){
    //Use class list for multiclass management
    const clickedClass = "clicked";
    //it checks clickedClass contained
    if (title.classList.contains(clickedClass)){
        title.classList.remove(clickedClass);
    } else {
        title.classList.add(clickedClass);
    }
}

function handleTitleClickListToggle(){
    //Use class list for multiclass management
    title.classList.toggle("clicked");
}

console.dir(title);
title.addEventListener("click", handleTitleClickListToggle);