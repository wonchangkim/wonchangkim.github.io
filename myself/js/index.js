// let d = new Date();
// let h = d.getHours();
// let m = d.getMinutes();
// let timeset = '';
// let aftertime = h - 12

// function addZero(i) {
//     if (i < 10) {
//         i = "0" + i;
//     }
//     return i;
// }

// function myFunction() {
//     var m = addZero(d.getMinutes());
// }

// if (h > 0 && h < 12) {
//     timeset = '오전' + h;
// } else {
//     timeset = '오후' + aftertime;
// }
// const moment = require("moment")
// moment.locale('ko');
// const nowtime = moment().format('LT');

function myFunction() {
    let chatarea = document.querySelector('.chat-messages-list');
    var node = document.createElement("div");
    node.classList.add('block');
    node.innerHTML = `<span class="txttime">1111</span> 
    <span class="anwtext reschatbubble">1111</span>`;
    chatarea.appendChild(node);
    document.querySelector('.inputform').reset();
   
}



