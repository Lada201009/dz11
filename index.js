
const list = document.getElementById('tasks');
const btnAdd = document.getElementById('btnAdd');
const btnDel = document.getElementById('btnDel')
const task = document.getElementById('task');

btnAdd.addEventListener('click', addNewTask);
btnDel.addEventListener('click', deleteCheckTasks);

function addNewTask (event) {
  const item = document.createElement('li');
  item.innerText = task.value;
  item.append(addChekbox())
  list.append(item);
  task.value = '';
}

function addChekbox(){
const checkElem = document.createElement('input');
checkElem.type = 'checkbox';
checkElem. classList.add('check');
return checkElem;
}

function deleteCheckTasks(event){
const deleteTasks = document.querySelectorAll('input[type="checkbox"]:checked');
deleteTasks.forEach(el => el.parentNode.remove());
}