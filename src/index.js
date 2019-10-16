document.addEventListener("DOMContentLoaded", () => {
  const formEl = document.querySelector('#create-task-form')
  const listEl = document.querySelector('#tasks')

  // add a single task
  function addTask(text, name) {
    debugger
    // 	create LI
    const todoEl = document.createElement('div')
    //  create button
    const btn = document.createElement("button");
    btn.innerHTML = "X";
    btn.className = "delete"
    
    //  add the text to the div
    const taskText = document.createElement('li')
    taskText.innerText = `${text}: ${name}`
    todoEl.className = 'todo'

    //  append text, name and button to the LI
    taskText.append(btn)
    todoEl.append(taskText)
    //  append LI to list
    listEl.appendChild(todoEl)

  }

  // listen to form submission

  formEl.addEventListener('submit', (event) => {
    debugger
    event.preventDefault()
    const text = formEl.task.value
    const name = formEl.person.value
    addTask(text, name)
    formEl.reset()
  })

  document.addEventListener('click', (event) => {
    if (event.target.className === 'delete') {
      event.target.parentElement.remove()
    }

  })

});
