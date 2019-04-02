// document.addEventListener("DOMContentLoaded", () => {
//   // your code here

// });

const formEl = document.getElementById("create-task-form");
const listEl = document.getElementById("tasks");

// add an <li> with the new todo:
function addToDo(text) {
  //make an li
  const todoEl = document.createElement("li");
  const btnEl = document.createElement("button");
  // set the li properties and add it to the list
  todoEl.innerText = text;
  btnEl.className = "delete";
  btnEl.innerText = "done";
  todoEl.appendChild(btnEl);
  listEl.appendChild(todoEl);
}

// event listener - grab the input from the form:
// call addToDo to set the input to a new li
formEl.addEventListener("submit", event => {
  event.preventDefault();
  const text = formEl.text.value;
  addToDo(text);
  formEl.reset();
});

// event listener to btn
document.addEventListener("click", event => {
  if (event.target.className === "delete") {
    event.target.parentElement.remove();
  }
});
