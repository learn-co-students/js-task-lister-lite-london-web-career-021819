
const formEl = document.querySelector('#create-task-form')
const listEl = document.querySelector('#tasks')

function addTask (text, user, date) {
	const taskEl = document.createElement('li')
  const userEl = document.createElement('span')
  const dateEl = document.createElement('span')
  const buttonEl = document.createElement('button')

  buttonEl.innerText = "X"
  buttonEl.className = 'button'

  dateEl.innerText = date

  userEl.innerText = user

	taskEl.innerText = text
  taskEl.className = 'taskit'
  listEl.appendChild(taskEl)
  taskEl.appendChild(userEl)
  userEl.appendChild(dateEl)
  taskEl.appendChild(buttonEl)
}

formEl.addEventListener('submit', (event) => {
  event.preventDefault()
  const text = formEl.text.value
  const user = formEl.user.value
  const date = formEl.date.value
  addTask(text, user, date)
  formEl.reset()
})

listEl.addEventListener('click', (event) => {
  if (event.target.className === 'button') {
    event.target.parentElement.parentElement.remove()
  }
})
