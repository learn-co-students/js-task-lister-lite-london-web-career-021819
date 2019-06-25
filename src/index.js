//// PAGE ELEMENTS
const formEl = document.getElementById('create-task-form')
const listEl = document.getElementById('tasks')

//// ADD TASK & BUTTON FUNCTION
function addTask (name, text, date) {
	const todoEl = document.createElement('tr')
  const nameEl = document.createElement('span')
  const dateEl = document.createElement('span')
  const button = document.createElement('button')
  nameEl.innerText = name + " "
  nameEl.className = 'name'
	todoEl.innerText = text + " "
	todoEl.className = 'task'
  dateEl.innerText = date
  dateEl.className = 'date'
  button.innerText = "X"
  button.className = 'button'
  listEl.appendChild(nameEl)
  nameEl.appendChild(todoEl)
  todoEl.appendChild(dateEl)
  dateEl.appendChild(button)
}

//// LISTEN TO FORM SUBMISSION
formEl.addEventListener('submit', (event) => {
  event.preventDefault()
  const name = formEl.name.value
  const text = formEl.text.value
  const date = formEl.date.value
  addTask(name, text, date)
  formEl.reset() } )

//// DELETE TASK WITH BUTTON
listEl.addEventListener('click', (event) => {
    if (event.target.className === 'button') {
      event.target.parentElement.parentElement.parentElement.remove()
    }
})

//   //// LISTEN TO DROP DOWN MENU
// document.getElementById('colorChanger').addEventListener('change', changeColor);
//
//
//   //// CHANGE FONT COLOUR
// function changeColor() {
//     const color = document.getElementById('colorChanger').value;
//     const list = document.getElementsByTagName('task');
//     for (var i=0; i<list.length; i++) {
//         list[i].style.color = color;
//     }
// }
