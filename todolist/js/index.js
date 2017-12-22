//add버튼을 눌렀을때 새로운 엘리먼트에 넣어주고 보여주기
const addButtonEl = document.querySelector('#add-button')

const inputEl = document.querySelector('#todo-input');
const listEl = document.querySelector('#todo-list');

addButtonEl.addEventListener('click', e => {
  //F2 누르고 바꾸기
  const itemEl = document.createElement('div');

  itemEl.textContent = inputEl.value;
  listEl.appendChild(itemEl);
  inputEl.value = '';
});
