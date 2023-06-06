//grab by id
const title = document.getElementById("title");
console.log(title);
// <h1 id="title">Grab me!</h1>
console.dir(title);
//all attributes in the h1 object
console.log(title.className);

title.innerText = "Change!" // change attribute by JS