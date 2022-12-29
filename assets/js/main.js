const inputField = document.querySelector('input');


document.addEventListener('click', event => {
  const clickedElem = event.target;

  try {
    if (clickedElem.classList.contains('add-task') && inputField.value) createNewTask(inputField.value);
    if (clickedElem.classList.contains('delete-task')) deleteTask(clickedElem);
    if (clickedElem.classList.contains('delete-all')) deleteAllTasks();
  }

  catch {

  }

  finally {
    clearInput();
    clearPage();
  };
});

document.addEventListener('keydown', event => {
  if (event.key === 'Enter' && inputField.value) {

    createNewTask(inputField.value);
    clearPage();
    clearInput();
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
  const liContent = `<p contenteditable="true">${inputContent}</p><button class="delete-task">🗑</button>`

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
