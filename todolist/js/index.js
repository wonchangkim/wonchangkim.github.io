//add버튼을 눌렀을때 새로운 엘리먼트에 넣어주고 보여주기
const addButtonEl = document.querySelector('#add-button')
const formEl = document.querySelector('#todo-form');
const inputEl = document.querySelector('#todo-input');
const listEl = document.querySelector('#todo-list');



function add(){

  const itemEl = document.createElement('div');
//빈값체크
  if(inputEl.value == ""){
    alert("할일을 입력하세요");

  }else{
    itemEl.textContent = inputEl.value;
    listEl.appendChild(itemEl);
    formEl.reset(); //form reset
  }

  itemEl.addEventListener('click', e=>{
    if(itemEl.classList.contains('complete')){
      itemEl.classList.remove('complete')
    }else{
      itemEl.classList.add('complete');
    }
  });

   const close = document.createElement('div')
   itemEl.appendChild(close)
   close.textContent = 'x';

   close.addEventListener('click', e => {
   listEl.removeChild(itemEl);
  });
}



