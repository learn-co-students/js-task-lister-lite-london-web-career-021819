document.addEventListener("DOMContentLoaded", () => {
});


const formEL = document.getElementById('create-task-form')
const listEL = document.getElementById('tasks')
const deleteButton = document.getElementsByClassName('deleteButton')

// add a task

function addTask (text) {
  const newLI = document.createElement('li')
  const button = document.createElement('button')
  const priority = document.createElement('p')
  priority.innerText = document.getElementsByClassName('priority')
  button.innerText = 'Delete?'
  button.className = 'deleteButton'
  newLI.innerText = text
  newLI.className = 'list-item'
  listEL.appendChild(newLI)
  newLI.append(priority)
  newLI.appendChild(button)
}

formEL.addEventListener('submit', (event) => {
  event.preventDefault()
  const text = formEL.text.value
  addTask(text)
})

document.addEventListener('click', (event) => {
  if (event.target.className === 'deleteButton') {
    event.target.parentElement.remove()
  }
})
