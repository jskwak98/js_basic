const loginForm = document.querySelector("#login-form");
//find form
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");
const greeting = document.querySelector("#greeting")
// then find elements inside the div form

const HIDDEN_CLASSNAME = "hidden";

function onLoginBtnClick(){
    // if the loginButton is just Button
    const val = loginInput.value;
    if (val === ""){
        alert("Please enter username");
    } else if (val.length > 15){
        alert("Username is too long");
    } else {
        console.log("hello", val);
    }
}

//loginButton.addEventListener("click", onLoginBtnClick);

function onLoginSubmit(event){
    event.preventDefault();
    const username = loginInput.value;
    //Entering the username
    loginForm.classList.add(HIDDEN_CLASSNAME);
    greeting.innerText = "Hello " + username;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

loginForm.addEventListener("submit", onLoginSubmit);