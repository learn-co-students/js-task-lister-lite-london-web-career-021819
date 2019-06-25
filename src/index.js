const formEl = document.getElementById('create-task-form')
const task = document.getElementById('new-task-description')
const dura = document.getElementById('new-duration')
const dateDue = document.getElementById('new-date-due')
const taskEl = document.getElementById('tasks')
const selectEl = document.getElementById('new-priority-description')
const sortSelect = document.getElementById('sort-select')


document.addEventListener('click', (event) => {
  if (event.target.className == 'delete') {
    event.target.parentElement.remove()
    event.target.remove()
  } else if (event.target.className == 'edit') {
    let etpe = event.target.parentElement
    task.value = etpe.querySelector('.content').innerText
    dura.value = etpe.querySelector('.duration-value').value
    dateDue.value = etpe.querySelector('.date-value').dataset.value
    selectEl.value = etpe.value
    etpe.remove()
    event.target.remove()
  }
})

formEl.addEventListener('submit', (event) => {
  event.preventDefault()

  if (task.value.length > 0) {
    const option = selectEl.options[selectEl.selectedIndex].value
    const duration = document.getElementById('new-duration').value
    const date = document.getElementById('new-date-due').value
    const newLi = document.createElement('li')

    if (option == 3) {
      newLi.className = 'high'
      newLi.value = 3
    }
    if (option == 2) {
      newLi.className = 'medium'
      newLi.value = 2
    }
    if (option == 1) {
      newLi.className = 'low'
      newLi.value = 1
    }

    newLi.innerHTML = `
    <span class="content">${task.value}</span> - <span class="edit" style="font-size:13px">Edit</span> - <span class="delete" style="font-size:14px">X</span>
    <ul style="color:grey; font-size:12px;">
      <li value="${duration}" class="duration-value">Duration: ${duration}mins</li>
      <li data-value="${date}" class="date-value">Date Due: ${date}</li>
    </ul>
    `

    taskEl.appendChild(newLi)

    formEl.reset()
  }
})

function sortPriority() {
  let highArr = []
  let medArr = []
  let lowArr = []
  let arr = []
  let list = document.querySelectorAll('li')

  for (let x = 0; x < list.length; x++) {
    if (list[x].value === 3) {
      highArr.push(list[x])
    } else if (list[x].value == 2) {
      medArr.push(list[x])
    } else if (list[x].value === 1) {
      lowArr.push(list[x])
    }
  }
  arr.push(...lowArr, ...medArr, ...highArr)

  taskEl.innerHTML = ''

  const prOption = sortSelect.options[sortSelect.selectedIndex].value

  if (prOption == 'desc') {
    arr.reverse()
  }

  arr.forEach(li => {
    taskEl.appendChild(li)
  })
}


sortSelect.addEventListener('change', (event) => {
  event.preventDefault()
  sortPriority()
})









//
