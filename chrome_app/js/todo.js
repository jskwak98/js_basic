const todoForm = document.getElementById("todo-form");
const todoList = document.getElementById("todo-list");
const todoInput = todoForm.querySelector("input")

function paintTodo(newTodo) {
    //when you add todo this will paint new todo on page
    const listElementWrapper = document.createElement("li");
    const listElement = document.createElement("span");
    listElementWrapper.appendChild(listElement);
    listElement.innerText = newTodo;
    todoList.appendChild(listElementWrapper);
}

function onTodoSubmit(event) {
    event.preventDefault();
    const newTodo = todoInput.value;
    todoInput.value = "";
    paintTodo(newTodo);
}

todoForm.addEventListener("submit", onTodoSubmit);