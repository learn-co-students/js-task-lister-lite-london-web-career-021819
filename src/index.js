

const formEl = document.querySelector('#create-task-form')
const listEl = document.querySelector('#tasks')
function addNewTask(text) {
  //create li
  const taskEl = document.createElement('li')
  //add text to li
  taskEl.innerText = text;
  //find the List
  //appwns the child to the parent.
  listEl.appendChild(taskEl)
}

document.addEventListener("submit", (event) => {
  event.preventDefault();
  const text = formEl['new-task-description'].value
  addNewTask(text);
});
