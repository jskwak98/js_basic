const title = document.querySelector(".eventHandlePractice");

function handleTitleClick(){
    //active string is called raw value and it can be the cause of error
    const clickedClass = "clicked"
    if (title.className === clickedClass){
        title.className = "eventHandlePractice";
    } else {
        title.className = clickedClass;
    }
    
}

title.addEventListener("click", handleTitleClick);