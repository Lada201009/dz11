
const list = document.getElementById('tasks');
const btnAdd = document.getElementById('btnAdd');
const btnDel = document.getElementById('btnDel')
const task = document.getElementById('task');
const date = document.getElementById('date');


function zero_first_format(value)
    {
        if (value < 10)
        {
            value='0'+value;
        }
        return value;
    }

function date_time()
    {
      var current_datetime = new Date();
      var day = zero_first_format(current_datetime.getDate());
      var month = zero_first_format(current_datetime.getMonth()+1);
      var year = current_datetime.getFullYear();

      return day+"."+month+"."+year;
    }
    document.getElementById('dateBlock').innerHTML = date_time();


btnAdd.addEventListener('click', addNewTask);
btnDel.addEventListener('click', deleteCheckTasks);

function addNewTask (event) {
  const item = document.createElement('li');
  item.innerText = task.value;
  item.append(dateNow());
  item.append(addChekbox());
  list.append(item);
  task.value = ''
}

function addChekbox(){
const checkElem = document.createElement('input');
checkElem.type = 'checkbox';
checkElem. classList.add('check');
return checkElem
}

function deleteCheckTasks(event){
const deleteTasks = document.querySelectorAll('input[type="checkbox"]:checked');
deleteTasks.forEach(el => el.parentNode.remove());
}
function dateNow(){
  let options = { weekday: 'long', month: 'short', day: 'numeric'};
  let dateToday = new Date().toLocaleDateString('en-US', options);
   return dateToday
}
