const todoForm = document.getElementById("todo-form");
const todoList = document.getElementById("todo-list");
const todoInput = todoForm.querySelector("input");

const TODOS_KEY = "todos";

//JSON.stringify(object) to save our todo lists
let todos = [];

function saveTodos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
}

function deleteTodo(event){
    // to recognize which button is clicked among buttons
    // get info from the event
    const toDel = event.target.parentElement;
    deleteID = toDel.id;
    toDel.remove();
    //localStorage.getItem(TODOS_KEY).
    //localStorage
}

function paintTodo(newTodoObject) {
    //when you add todo this will paint new todo on page
    const listElementWrapper = document.createElement("li");
    const listElement = document.createElement("span");
    listElement.innerText = newTodoObject.text;
    listElement.id = newTodoObject.id;

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
    const newTodoObject = {
        id: Date.now(),
        text:newTodo,
    };
    todos.push(newTodoObject);
    paintTodo(newTodoObject);
    saveTodos();
}

todoForm.addEventListener("submit", onTodoSubmit);

const savedTodos = localStorage.getItem(TODOS_KEY);
if (savedTodos){
    const parsedTodos = JSON.parse(savedTodos);
    todos = parsedTodos;
    parsedTodos.forEach(paintTodo)
}