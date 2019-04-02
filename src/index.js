document.addEventListener("DOMContentLoaded", () => {
  const formEl = document.querySelector('#create-task-form')
  const listEl = document.querySelector('#tasks')

  // add a single task
  function addTask (text) {
  	// 	create LI
  	const todoEl = document.createElement('li')
    //  create button
    const btn = document.createElement("button");
    btn.innerHTML = "X";
    btn.className = "delete"

  	//  add the text to the LI
  	todoEl.innerText = text
  	todoEl.className = 'todo'
    //  append button to the LI
    todoEl.appendChild(btn);
  	//  append LI to list
    listEl.appendChild(todoEl)

  }

  // listen to form submission

  formEl.addEventListener('submit', (event) => {
  event.preventDefault()
  const text = formEl.text.value
  addTask(text)
  formEl.reset()
  })

  document.addEventListener('click', (event) => {
  if (event.target.className === 'delete') {
    event.target.parentElement.remove()
  }

  })

});
