const inputField = document.querySelector('input');

document.addEventListener('click', event => {
  const clickedElem = event.target;


  try {
    if (clickedElem.classList.contains('add-task') && inputField.value) createNewTask(inputField.value);
    if (clickedElem.classList.contains('delete-task')) deleteTask(clickedElem);
    if (clickedElem.classList.contains('delete-all')) deleteAllTasks();
    if (clickedElem.nodeName === 'P') completeTask(clickedElem);
  }

  catch {

  }

  finally {
    clearInput();
    clearPage();
    storeTask();
  };
});

document.addEventListener('keydown', event => {
  if (event.key === 'Enter' && inputField.value) {
    createNewTask(inputField.value);
    clearPage();
    clearInput();
    storeTask();
  };
});

function clearInput() {
  inputField.value = '';
};

function clearPage() {
  const taskBody = document.querySelector('.task-list');
  const taskList = document.querySelectorAll('li');

  if (taskList.length) {
    taskBody.classList.remove('tasks');
  } else {
    taskBody.classList.add('tasks');
  };
};

function createNewTask(inputContent) {
  const liElement = document.createElement('li');
  const ulElement = document.querySelector('ul');
  const liContent = `<p>${inputContent}</p><button class="delete-task">🗑</button>`

  liElement.innerHTML = liContent;
  ulElement.appendChild(liElement);
}

function deleteTask(taskElement) {
  taskElement.parentElement.remove();
};

function deleteAllTasks() {
  const tasks = document.querySelectorAll('li');
  tasks.forEach(element => element.remove());
};

function completeTask(clickedElem) {
  clickedElem.classList.toggle('completed-task');
};

function saveLocalData() {
  const userTasks = document.querySelectorAll('li');
  const taskContent = [];

  for (tasks of userTasks) {
    taskContent.push(tasks.textContent.replace('🗑', ''));
  };
  return taskContent;
};

function storeTask() {
  const taskJson = JSON.stringify(saveLocalData());
  localStorage.setItem('tasks', taskJson);
};

(function uploadTasks() {
  const storagedTasks = JSON.parse(localStorage.getItem('tasks'));
  storagedTasks.forEach(task => {
    createNewTask(task);
  });
})();
