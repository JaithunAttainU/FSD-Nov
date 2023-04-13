const addBtnElement = document.querySelector("#add-btn")
const taskInputEle = document.querySelector("#task-input")
const taskListEle = document.querySelector("#to-do-list")

addBtnElement.addEventListener('click', (event) => {
  const newTask = taskInputEle.value

  if (!newTask) {
    alert("Please enter the task...")
    return
  }
  console.log(newTask)

  // #1
  // const oldTasks = taskListEle.innerHTML;
  // taskListEle.innerHTML = `${oldTasks}<li>${newTask}<button>x</button></li><div>`

  // #2
  const newTaskLiEle = document.createElement('li') //<li></li>
  newTaskLiEle.innerText = newTask //<li>newTask</li>

  const deleteBtnEle = document.createElement('button') //<button></button>
  deleteBtnEle.innerText = "x" //<button>X</button>
  deleteBtnEle.addEventListener('click', deleteBtnClickListener)

  const checkboxEle = document.createElement('input') //<input/>
  checkboxEle.type = "checkbox" //<input type="checkbox"/>
  checkboxEle.addEventListener('change', checkBoxChangeListener)

  newTaskLiEle.prepend(checkboxEle) //<li><input type="checkbox"/>newTask</li>
  newTaskLiEle.append(deleteBtnEle) //<li><input type="checkbox"/>newTask<button>X</button></li>
  //append to the ul list in DOM
  // taskListEle.append(newTaskLiEle)
  taskListEle.prepend(newTaskLiEle)

  //clear the input text box after adding the task in list
  taskInputEle.value = ''
})


function deleteBtnClickListener(event) {
  //delete the li element

  if (event.target.parentElement) {
    event.target.parentElement.remove()
  }
}

function checkBoxChangeListener(event) {
  console.log("Checkbox is changed", event)
  console.log(event.target.parentElement)
  // if (event.target.checked) {
  //   event.target.parentElement.classList.add('complete')
  //   event.target.parentElement.style.textDecoration = "line-through"

  // } else {
  //   event.target.parentElement.classList.remove('complete')
  //   event.target.parentElement.style.textDecoration = "none"
  // }

  event.target.parentElement.classList.toggle('complete')
}

