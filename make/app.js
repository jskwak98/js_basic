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
        console.log("hello", loginInput.value);
    }
}

//loginButton.addEventListener("click", onLoginBtnClick);

