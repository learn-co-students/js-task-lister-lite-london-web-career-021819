let ascOrder = true;
const elForm = document.getElementById('create-task-form');
const elUl = document.getElementById('tasks');
const inputs = {
  high: [],
  medium: [],
  low: []
};
// Creating LI

const addLi = (userInput) => {
  const elLi = document.createElement('li');
  elLi.setAttribute('id', `${Date.now()+Math.floor(Math.random()*10000)}`);
  const priorityEl = document.getElementById('priority');
  const priority = priorityEl.options[priorityEl.selectedIndex].value;
  elLi.className = `todo-el ${priority}`;
  elLi.textContent = userInput;
  
  inputs[priority].push(elLi);
  
  elUl.appendChild(elLi);
}

// Create sorted Array

function sortPriority() {
  const elLi = document.createElement('li');
  elLi.setAttribute('id', `${Date.now()+Math.floor(Math.random()*10000)}`);
  if (ascOrder) {
    inputs.high.forEach(elem => elUl.appendChild(elem))
    inputs.medium.forEach(elem => elUl.appendChild(elem))
    inputs.low.forEach(elem => elUl.appendChild(elem))
    ascOrder = false;
  } else {
    ascOrder = true;
    inputs.low.forEach(elem => elUl.appendChild(elem))
    inputs.medium.forEach(elem => elUl.appendChild(elem))
    inputs.high.forEach(elem => elUl.appendChild(elem))
  }
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