const input = document.querySelector('.add input')
const addButton = document.querySelector('.add button')
const ulToDo = document.querySelector('.tasksToDo ul')
const ulDone = document.querySelector('.tasksDone ul')
const TaskList = [];
const DoneTaskList = [];
addButton.addEventListener('click', (e) => {
  e.preventDefault();
  if (input.value) {
    let newTask = input.value
    let arrayTask = { id: TaskList.length + 1, name: newTask };
    TaskList.push(arrayTask)
    ShowListToDo(arrayTask)
  } else alert('You didnt write any task.')
  input.value = ''
})
const deleteTask = (e) => {
  if (e.target.dataset.done) {
    let indexDel = parseInt(e.target.dataset.key);
    let indexTask = DoneTaskList.findIndex(item => item.id === indexDel)
    DoneTaskList.splice(indexTask, 1)
    e.target.parentNode.remove()
  }
  let indexDel = parseInt(e.target.dataset.key);
  let indexTask = TaskList.findIndex(item => item.id === indexDel)
  TaskList.splice(indexTask, 1)
  e.target.parentNode.remove()
}
const doneTask = (e) => {
  let indexBtn = parseInt(e.target.dataset.key);
  let indexTask = TaskList.findIndex(item => item.id === indexBtn)
  let newDoneTask = TaskList[indexTask];
  DoneTaskList.push(newDoneTask)
  deleteTask(e);
  showDoneTask(newDoneTask)
}
const showDoneTask = (newDoneTask) => {
  const newLi = document.createElement('li')
  const btnRemove = document.createElement('button')
  newLi.textContent = newDoneTask.name
  btnRemove.textContent = 'X'
  btnRemove.setAttribute('data-key', newDoneTask.id)
  btnRemove.setAttribute('data-done', 'true')
  ulDone.appendChild(newLi);
  newLi.appendChild(btnRemove)
  btnRemove.addEventListener('click', deleteTask)
}
const ShowListToDo = (arrayTask) => {
  const newLi = document.createElement('li')
  const btnRemove = document.createElement('button')
  const btnDone = document.createElement('button')
  btnRemove.textContent = 'X'
  btnRemove.setAttribute('data-key', arrayTask.id)
  btnDone.textContent = 'Done'
  btnDone.setAttribute('data-key', arrayTask.id)
  newLi.textContent = arrayTask.name
  ulToDo.appendChild(newLi)
  newLi.appendChild(btnRemove)
  newLi.appendChild(btnDone)
  btnRemove.addEventListener('click', deleteTask)
  btnDone.addEventListener('click', doneTask)
}