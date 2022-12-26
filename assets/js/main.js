const task = document.querySelector("ul");
const input = document.querySelector('input');

function addTask(textTask) {
  const newTask = document.createElement('li');
  const newButton = document.createElement('button');
  const newP = document.createElement('p')
  const createTextBtn = document.createTextNode('🗑')
  const createText = document.createTextNode(textTask);

  newP.appendChild(createText);
  newButton.appendChild(createTextBtn);
  newTask.appendChild(newP);
  newTask.appendChild(newButton);
  task.insertAdjacentElement('afterbegin', newTask);
};

function getInput() {
  document.addEventListener('click', event => {
    const elem = event.target;
    if (input.value && elem.classList.contains('add-task')) {
      addTask(input.value);
      input.value = "";
    };
  });
};

getInput();
