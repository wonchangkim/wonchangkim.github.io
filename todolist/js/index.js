//시간
moment.locale('ko');
const nowtime = moment().format('LLL');




//add버튼을 눌렀을때 새로운 엘리먼트에 넣어주고 보여주기
const addButtonEl = document.querySelector('#add-button')
const formEl = document.querySelector('#todo-form');
const inputEl = document.querySelector('#todo-input');
const listEl = document.querySelector('#todo-list');



function add(){
  const wrapEl = document.createElement('div');
  const itemEl = document.createElement('div');

//빈값체크
  if(inputEl.value == ""){
    alert("할일을 입력하세요");

  }else{
    listEl.appendChild(wrapEl);
    wrapEl.classList.add('wrap');
    itemEl.textContent = inputEl.value ;
    wrapEl.appendChild(itemEl);
    itemEl.classList.add('txt')
    formEl.reset(); //form reset
  }

  wrapEl.addEventListener('click', e=>{
    if(wrapEl.classList.contains('complete')){
      wrapEl.classList.remove('complete');
      itemEl.classList.remove('textdeco');
    }else{
      wrapEl.classList.add('complete');
      itemEl.classList.add('textdeco');
    }

  });

  const time = document.createElement('span')
  wrapEl.appendChild(time)
  time.classList.add('padding')
  time.textContent = nowtime;

  const close = document.createElement('div')
  close.classList.add('close');
  wrapEl.appendChild(close)
  close.textContent = String.fromCodePoint(0xD800,0xDD02) ;

  close.addEventListener('click', e => {
  listEl.removeChild(wrapEl);
  });
  //scroll 마지막 div로 이동
  listEl.lastChild.scrollIntoView();
}



