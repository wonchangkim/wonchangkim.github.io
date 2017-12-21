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
const moment = require("moment")
moment.locale('ko');
const nowtime = moment().format('LT'); 

const chatarea = document.querySelector('.chat-messages-list');

function adddiv() {
    let makediv = document.createElement('div');
    makediv.id = 'wrap';
    chatarea.appendChild(makediv);
}



function getTxt() {
    console.log('make a div');
    let inputrequest = document.querySelector('#inputres').value;
    let text = `<span class="txttime">${nowtime}</span>
             <span id="request" class="anwtext reschatbubble">${inputrequest}</span>              `
    document.querySelector('.wrap').innerHTML = text;
}