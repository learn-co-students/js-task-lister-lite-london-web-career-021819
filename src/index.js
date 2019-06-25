// document.addEventListener("DOMContentLoaded", () => {
//   // your code here
// });

// Save form element, input element within the form element and list element (containing the todo tasks)
const formEl = document.querySelector("form#create-task-form")
const inputEl = document.querySelector("input#new-task-description")
const listEl = document.querySelector("#tasks")
const sortSelector = document.querySelector('.sorting-selector')

//add task function
function addTask(string){

  // create li item element to contain the task
  const liEl = document.createElement("li")

  // add task content (name in string format, drop-down select menu and delete button)
  liEl.innerHTML +=
  `<div class="task-element"> ${string}
    <select class="priority-selector">
      <option value="default">Choose</option>
      <option value="high">High</option>
      <option value="medium">Medium</option>
      <option value="low">Low</option>
    </select>
    <button class='delete-button'> x </button>
  </div>`

  // append li element (with task) to list element
  listEl.append(liEl)


  // set priority to task item
  const priority = liEl.querySelector(".priority-selector")
  const taskString = liEl.querySelector(".task-element")
  if (priority){
    console.log("prioritySelector change listener executed")
    priority.addEventListener('change', event =>{
      if(event.target.value === "high"){
        console.log("high priority!")
        taskString.className = "high-priority"
        liEl.className = "high-priority"
      } else if (event.target.value === "medium"){
        console.log("medium priority!")
        taskString.className = "medium-priority"
        liEl.className = "medium-priority"
      } else if (event.target.value === "low"){
        console.log("low priority!")
        taskString.className = "low-priority"
        liEl.className = "low-priority"
      }
    })
  }
  //edit task listener

}

// listen to form submission
formEl.addEventListener('submit', event => {
  event.preventDefault()
  console.log('form submitted!')
  const text = inputEl.value
  if (text.length > 0){
    addTask(text)
  }
  formEl.reset()
})

//global listener for delete button with class "delete-button"
document.addEventListener('click', event => {
  if (event.target.className === 'delete-button') {
    console.log('deleting task!')
    event.target.parentElement.parentElement.remove()
    event.target.parentElement.remove()
    event.target.remove()
  }
})


//sorting by priority function
function sortByPriority(){
  let high = [];
  let medium = [];
  let low = [];
  let sortedList = [];

  // nodeList of li items
  const nodeList = document.querySelectorAll("li")

  //adding high, medium and low priority li elements to their respective arrays
  for (let i=0; i < nodeList.length; i++){
    if(nodeList[i].className == "high-priority"){
      high.push(nodeList[i])
    } else if (nodeList[i].className == "medium-priority"){
      medium.push(nodeList[i])
    } else if (nodeList[i].className == "low-priority"){
      low.push(nodeList[i])
    }
  }

  //concatenating all the arrays together in descending order
  sortedList = [...high, ...medium, ...low]
  listEl.innerHTML = ''


  //store value of the sortSelector
  const sortingOption = sortSelector.options[sortSelector.selectedIndex].value
  if (sortingOption == 'asc') {
    sortedList.reverse()
  }

  //append each li elements from the sorteList array to the tasks list (listEl)
  sortedList.forEach(li => {
    listEl.appendChild(li)
  })
  // //forEach method shorter
  // for (let j=0; j<sortedList.length; j++){
  //   listEl.append(sortedList[j])
  // }

  return sortedList
}

//sorting listener
sortSelector.addEventListener('change', event => {
  event.preventDefault();
  sortByPriority();
})
