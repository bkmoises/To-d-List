const inputField = document.querySelector('input');

document.addEventListener('click', event => {
  const clickedElem = event.target;

  storeTasks();

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

function storeTasks() {
  const userTasks = document.querySelectorAll('li');
  for (tasks of userTasks) {
    console.log(tasks.textContent)
  }

}

// function saveTasks() {
//   const tasks = document.querySelectorAll('li');
//   const arTasks = [];

//   for (let task of tasks) {
//     let taskContent = task.innerText.replace('🗑', '');
//     taskContent = taskContent.replace('/n', '');
//     arTasks.push(taskContent);
//   };

//   const taskJSON = JSON.stringify(arTasks);
//   localStorage.setItem('task', taskJSON);
// };
