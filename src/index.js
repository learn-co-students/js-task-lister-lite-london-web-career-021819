
// API stuff

function get(url) {
  return fetch(url).then(resp => resp.json())
}
function post(url, data) {
  return fetch(url,
    {
      method: 'POST',
      headers: apiHeaders,
      body: JSON.stringify(data)
    }
  )
}

function destroy(url) {
  // debugger
  return fetch(url,
    {
      method: 'DELETE'
    }
  ).then(resp => resp.json())
}

const API = { get, destroy, post }
const apiHeaders
  = {
  "Content-Type": "application/json",
  Accept: "application/json"
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
  const todoEl = document.createElement('li')
  //  create button
  const btn = document.createElement("button");
  btn.innerHTML = "X";
  btn.className = "delete"

  //  add the text to the div
  todoEl.innerText = `${task.text}: ${task.name}`
  todoEl.className = 'todo'
  todoEl.id = task.id

  //  append text, name and button to the LI
  todoEl.append(btn)
  //  append LI to list
  listEl.appendChild(todoEl)
}

// listen to form submission
formEl.addEventListener('submit', () => {
  debugger
  const taskObj = {
    text: formEl.task,
    name: formEl.person
  }
  API.post(choresUrl, taskObj).then(
    appendTask(taskObj)
  )
  formEl.reset()
})



document.addEventListener('click', (event) => {
  if (event.target.className === 'delete') {
    API.destroy(`${choresUrl}${event.target.parentElement.id}`)
    event.target.parentElement.remove()
  }
})

getAllTasks()