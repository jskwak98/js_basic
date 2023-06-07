const hellos = document.getElementsByClassName("hello");
// get list by class name
console.log(hellos);
// HTMLCollection(5) [h1.hello, h1.hello, h1.hello, h1.hello, h1.hello]

const title = document.querySelector(".hellodiv h1");//cs selector
console.log(title);
// <h1>grab me by query selector 1</h1>
// if multiple needed

const titles = document.querySelectorAll(".hellodiv h1");//cs selector
console.log(titles);
//NodeList(3) [h1, h1, h1]0: h11: h12: h1length: 3[[Prototype]]: NodeList

// you can use query selector for id

const idSel = document.querySelector("#helloid");
console.log(idSel);
// <h3 id="helloid">grab me by id</h3>