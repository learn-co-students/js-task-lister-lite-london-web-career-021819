
// API stuff

function get(url) {
  return fetch(url).then(resp => resp.json())
}
function post(url, id, data) { 
  return fetch(`${url}${id}`,
    {
      method: 'POST',
      headers: apiHeaders,
      body: JSON.stringify(data)
    }
  )
}

function destroy(url, id) {
  return fetch(`${url}${id}`).then(resp => resp.json())
}

const API = { get, destroy }
const apiHeaders
 = {
    "Content-Type": "application/json",
    Accept: "application/json"
}
const choresUrl = "http://localhost:3000/chores/"
const formEl = document.querySelector('#create-task-form')
const listEl = document.querySelector('#tasks')


///get all the saved tasks
function getAllTasks() {
  API.get(choresUrl).then(tasks => tasks.forEach(task => appendTask(task)))
}


// add a single task
function appendTask(task) {
  // 	create LI
  const todoEl = document.createElement('div')
  //  create button
  const btn = document.createElement("button");
  btn.innerHTML = "X";
  btn.className = "delete"

  //  add the text to the div
  const taskText = document.createElement('li')
  taskText.innerText = `${task.text}: ${task.name}`
  todoEl.className = 'todo'

  //  append text, name and button to the LI
  taskText.append(btn)
  todoEl.append(taskText)
  //  append LI to list
  listEl.appendChild(todoEl)
}

// listen to form submission

formEl.addEventListener('submit', (event) => {
  event.preventDefault()
  const taskObj = {
    text: formEl.task.value,
    name: formEl.person.value
  }
  API.post()
  appendTask(taskObj)
  formEl.reset()
})

document.addEventListener('click', (event) => {
  if (event.target.className === 'delete') {
    event.target.parentElement.remove()
  }
})

