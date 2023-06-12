const loginForm = document.querySelector("#login-form");
//find form
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");
// then find elements inside the div form

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
    // this stops the default behaviour of any event
    // thus submission doesn't make the browser to refresh
    console.log(event);
    // you get information from browser when Submit event happens
    const val = loginInput.value;
    console.log("hello", val);
}

loginForm.addEventListener("submit", onLoginSubmit);