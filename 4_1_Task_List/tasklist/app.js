const listTasks = document.querySelector('.collection');
const form = document.querySelector('#task-form');
const clearTask = document.querySelector('.clear-tasks');
const filterTask = document.querySelector('#filter');
const addTask = document.querySelector('#task');

allEventListeners();

function allEventListeners() {
  document.addEventListener('DOMContentLoaded', getTasks);

  form.addEventListener('submit', clickToSubmit);

  listTasks.addEventListener('click', deleteATask);

  clearTask.addEventListener('click', clearAllTasks);

  filterTask.addEventListener('keyup', searchForTasks);
}

function getTasks() {
  if (localStorage.getItem('task')) {
    const task = JSON.parse(localStorage.getItem('task'));
    task.forEach(function (eachTask) {
      li = document.createElement('li');
      li.className = 'collection-item';

      li.appendChild(document.createTextNode(eachTask));

      const link = document.createElement('a');
      // Add class
      link.className = 'delete-item secondary-content';
      // Add icon html
      link.innerHTML = '<i class="fa fa-remove"></i>';

      li.appendChild(link);

      listTasks.appendChild(li);
    });
  }
}

function clickToSubmit(e) {
  if (addTask.value === '') {
    alert('Add new task');
  }

  li = document.createElement('li');
  li.className = 'collection-item';

  li.appendChild(document.createTextNode(addTask.value));

  const link = document.createElement('a');
  // Add class
  link.className = 'delete-item secondary-content';
  // Add icon html
  link.innerHTML = '<i class="fa fa-remove"></i>';

  li.appendChild(link);

  listTasks.appendChild(li);

  addToLocalSP(addTask.value);

  addTask.value = '';

  e.preventDefault();
}

function addToLocalSP(val) {
  let tasks;
  if (localStorage.getItem('task')) {
    tasks = JSON.parse(localStorage.getItem('task'));
  } else {
    tasks = [];
  }
  tasks.push(val);
  localStorage.setItem('task', JSON.stringify(tasks));
}

function deleteATask(e) {
  if (e.target.parentElement.classList.contains('delete-item')) {
    if (confirm('Are you sure?')) {
      e.target.parentElement.parentElement.remove();
      removeATaskFromLS(e.target.parentElement.parentElement);
    }
  }
}

function removeATaskFromLS(li) {
  const content = li.textContent;
  if (localStorage.getItem('task')) {
    let tasks = JSON.parse(localStorage.getItem('task'));

    if (tasks.includes(content)) {
      tasks.forEach(function (item, index) {
        if (item === content) {
          tasks.splice(index, 1);
        }
      });
      localStorage.setItem('task', JSON.stringify(tasks));
    }
  }
}

function clearAllTasks(e) {
  // listTasks.textContent = '';
  while (listTasks.firstChild) {
    listTasks.removeChild(listTasks.firstChild);
  }
  clearLS();
  e.preventDefault();
}

function clearLS() {
  localStorage.clear();
}

function searchForTasks() {
  const search = filterTask.value.toLowerCase();
  const allTask = document.querySelectorAll('.collection-item');
  allTask.forEach(function (item) {
    const text = item.textContent.toLowerCase();
    if (text.indexOf(search) != -1) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}
