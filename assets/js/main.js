const taskList = document.querySelector(".task-list");
const ul = document.querySelector("ul");
const li = document.querySelector('li');
const addBtn = document.querySelector(".add-task");
const input = document.querySelector('input');

addBtn.addEventListener('click', function() {
  if (input.value) {
    makeTask();
    clearInput();
  };
});

document.addEventListener("keydown", event => {
  if (event.key == 'Enter' && input.value) {
    makeTask(input.value);
    clearInput();
    clearPage();
  };
});

document.addEventListener('click', event => {
  const elem = event.target;
  if (elem.classList.contains("delete-task")) deleteTask(elem);
  if (elem.classList.contains("delete-all")) deleteAllTasks();
  clearPage();
});

function makeTask(newElement) {
  const makeLi = document.createElement('li');
  const makeP = document.createElement('p');
  const makeBtn = document.createElement('button');

  makeBtn.setAttribute('class', 'delete-task')
  makeBtn.innerHTML = '🗑';
  makeP.innerHTML = newElement;

  makeLi.appendChild(makeP);
  makeLi.appendChild(makeBtn);
  ul.appendChild(makeLi);

  saveTasks();
};

function clearInput() {
  input.value = '';
};

function deleteTask(element) {
  element.parentElement.remove();
  saveTasks();
}

function deleteAllTasks() {
  const tasks = document.querySelectorAll('li');
  tasks.forEach(elem => {
    elem.remove();
  });
  saveTasks();
};

function clearPage() {
  const tasks = document.querySelectorAll('li');
  if (tasks.length) taskList.classList.remove('tasks');
  if (!tasks.length) taskList.classList.add('tasks');
};

function saveTasks() {
  const tasks = document.querySelectorAll('li');
  const arTasks = [];

  for (let task of tasks) {
    let taskContent = task.innerText.replace('🗑', '');
    taskContent = taskContent.replace('/n', '');
    arTasks.push(taskContent);
  };

  const taskJSON = JSON.stringify(arTasks);
  localStorage.setItem('task', taskJSON);
};

function loadTasks() {
  const strTasks = JSON.parse(localStorage.getItem('task'))
  for (let tasks of strTasks) {
    makeTask(tasks);
  }
};

loadTasks();
clearPage();
