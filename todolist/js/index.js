//시간
moment.locale('ko');
const nowtime = moment().format('LLL');




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
    itemEl.textContent = inputEl.value ;
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
  const time = document.createElement('span')
  itemEl.appendChild(time)
  time.textContent = nowtime;


  const close = document.createElement('div')
  itemEl.appendChild(close)
  close.textContent = String.fromCodePoint(0xD800,0xDD02) ;


   close.addEventListener('click', e => {
   listEl.removeChild(itemEl);
  });
}



