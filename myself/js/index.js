
moment.locale('ko');
const nowtime = moment().format('LT');
console.log(nowtime);
let toptime = document.querySelector('.time');
toptime.innerHTML = `${nowtime}`;
function myFunction() {
    let chatarea = document.querySelector('.chat-messages-list');
    var node = document.createElement("div");
    let txt = document.querySelector('#inputres');
    node.classList.add('block');
    chatarea.appendChild(node);
    node.innerHTML = `<span class="txttime">${nowtime}</span> 
    <span class="anwtext reschatbubble">${txt.value}</span>`;
    document.querySelector('.inputform').reset();
}



