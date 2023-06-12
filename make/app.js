const loginForm = document.querySelector("#login-form");
//find form
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");
// then find elements inside the div form

function onLoginBtnClick(){
    console.log(loginInput.value);
}

loginButton.addEventListener("click", onLoginBtnClick);

