const todoForm = document.getElementById("todo-form");
const todoList = document.getElementById("todo-list");
const todoInput = todoForm.querySelector("input")

function deleteTodo(event){
    // to recognize which button is clicked among buttons
    // get info from the event
    const toDel = event.target.parentElement;
    toDel.remove();
}

function paintTodo(newTodo) {
    //when you add todo this will paint new todo on page
    const listElementWrapper = document.createElement("li");
    const listElement = document.createElement("span");
    listElement.innerText = newTodo;

    //create event listener for the list button
    const listButton = document.createElement("button");
    listButton.innerText = "❌";
    listButton.addEventListener("click", deleteTodo);

    //create element
    listElementWrapper.appendChild(listElement);
    listElementWrapper.appendChild(listButton);
    todoList.appendChild(listElementWrapper);
}

function onTodoSubmit(event) {
    event.preventDefault();
    const newTodo = todoInput.value;
    todoInput.value = "";
    paintTodo(newTodo);
}

todoForm.addEventListener("submit", onTodoSubmit);