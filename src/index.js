const elForm = document.getElementById('create-task-form');
const elUl = document.getElementById('tasks');

// Creating LI

const addLi = (userInput) => {
  const elLi = document.createElement('li');
  elLi.setAttribute('id', `${Date.now()+Math.floor(Math.random()*10000)}`);
  const priorityEl = document.getElementById('priority');
  const priority = priorityEl.options[priorityEl.selectedIndex].value;
  elLi.className = `todo-el ${priority}`;
  elLi.textContent = userInput;
  elUl.appendChild(elLi);
}



// Add listeners
elForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const userInput = elForm.blade.value;
  addLi(userInput);
  elForm.reset();
})

document.addEventListener('click', (e) => {
  if (e.target.className.includes('todo-el')) {
    e.target.remove()
  }
})