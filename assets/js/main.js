const inputField = document.querySelector('.input-field');
const ulList = document.querySelector('ul');

const taskList = [];

function getValue() {
  document.addEventListener('click', event => {
    if (event.target.classList.contains('add-item')) {
      const textCreator = document.createTextNode(inputField.value);
      const liCreator = document.createElement('li')

      liCreator.appendChild(textCreator);
      liCreator.setAttribute('checkbox');
      ulList.appendChild(liCreator)

    }
  });
};

getValue();
console.log(ulList)
