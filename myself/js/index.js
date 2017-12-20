
let d = new Date();
let h = d.getHours();
let m = d.getMinutes();
let timeset = '';
let nowtime = 24 - h;

if(h < 12 && h > 0){
    timeset = '오전' + nowtime;
    
}else{
    timeset = '오후' + nowtime;
}

const chatarea = document.querySelector('.chat-messages-list');


function getTxt() {
   
    let inputrequest = document.querySelector('#inputres').value;
    let question = `<div class="restxt right">
                            <span class="txttime">${timeset}:${m}</span>
                            <span id="request" class="anwtext reschatbubble">${inputrequest}</span>
                    </div>`
    chatarea.innerHTML = question;
}

