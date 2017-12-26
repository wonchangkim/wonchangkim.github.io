// 타이머
let whitetimer = 5;
let whiteinterval = 0;
let blackinterval = 0;
let whitetime = 3;
let blacktimer = 5;
let blacktime = 3;

function whitePause() {
    if (whiteinterval === 0) {
        whiteinterval = setInterval(function(){
            whitetimer--;
            if(whitetimer === 0){
                whitetimer = 5;
                whitetime--;
            }
        },1000);
     
    } else {
        clearInterval(whiteinterval);
        whiteinterval = 0;
      
    }
}
function blakcPause() {
    if (blackinterval === 0) {
        blackinterval = setInterval(function () {
            blacktimer--;
            if (blacktimer === 0) {
                blacktimer = 5;
                blacktime--;
            }
        }, 1000);
      
    } else {
        clearInterval(blackinterval);
        blackinterval = 0;
        
    }
}
function whitetimeReset() {
    clearInterval(whiteinterval);
    whiteinterval = 0;
}
function blacktimeReset() {
    clearInterval(blackinterval);
    blackinterval = 0;
}


let canvas = document.querySelector('#canvas');
let ctx = canvas.getContext('2d');
let tt = canvas.getContext('2d');
let c = canvas.getContext('2d');

ctx.strokeStyle = '#fffff';
ctx.lineWidth = 10;
ctx.lineCap = 'round';


function degToRad(degree) {
    let factor = Math.PI / 180;
    return degree * factor;
}

function whiteTime() {
    //background
    ctx.fillStyle = '#F37A78';
    ctx.fillRect(100, 0, 200, 200);

    //제한타임
    tt.beginPath();
    tt.arc(200, 100, 90, degToRad(0), degToRad((whitetime * 120) - 90));
    tt.stroke();

    //초
    ctx.beginPath();
    ctx.arc(200, 100, 75, degToRad(270), degToRad((whitetimer * 36) - 90));
    ctx.stroke();

    
    //time
    ctx.font = '80px Nunito Sans';
    ctx.fillStyle = '#ffffff';
    ctx.fillText(whitetimer, 170, 130);

}
function blackTime() {
    //background
    ctx.fillStyle = '#F37A78';
    ctx.fillRect(400, 0, 200, 200);

    //제한타임
    tt.beginPath();
    tt.arc(500, 100, 90, degToRad(0), degToRad((blacktime * 120) - 90));
    tt.stroke();

    //초
    ctx.beginPath();
    ctx.arc(500, 100, 75, degToRad(270), degToRad((blacktimer * 36) - 90));
    ctx.stroke();

    //time
    ctx.font = '80px Nunito Sans';
    ctx.fillStyle = '#ffffff';
    ctx.fillText(blacktimer, 470, 130);

}


setInterval(blackTime, 1000);
setInterval(whiteTime, 1000);



let turn = 1;

let wrows = new Array();
let brows = new Array();
let wcount = 1;
let bcount = 1;

let rowwcount = 1;
let colcount = 1;
let diagonal = 1;
let diagonal2 = 1;



document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.col').forEach(el => {

        let r = el.closest('.row').classList[0].slice(4, 7);
        //각각의 배열
        wrows[r] = new Array();
        brows[r] = new Array();

        el.addEventListener('click', e => {

            if (turn % 2 !== 0) {
                if (el.classList.contains('white') || el.classList.contains('black')) {
                    alert("이미바둑알이있습니다.");
                } else {
                    el.classList.add('white');
                    blakcPause();
                    whitetimeReset();
                    
                    document.querySelector('.wcount').innerHTML = `${wcount}`;

                    // console.log(`흰돌카운트: ${wcount}`);

                    wrows[r].push(Number(el.classList[0].slice(4, 7)));
                    wrows[r].sort(function (a, b) {
                        return b - a;
                    });

                    for (let i = 1; i < wrows.length; i++) {
                        for (let j = 0; j < wrows[i].length; j++) {
                            //대각선1
                            if (wrows[i][j] - 1 === wrows[i + 1][j]) {
                                diagonal++
                                console.log(`오른쪽연속값 : ${diagonal}`);
                                if (diagonal === 5) {
                                    alert("게임끝");
                                }

                            } else {
                                diagonal = 1;
                                console.log(`오른쪽초기값: ${diagonal}`);
                            }
                            //대각선2
                            if (wrows[i][j] + 1 === wrows[i + 1][j]) {
                                diagonal2++
                                console.log(`왼쪽대각선연속값 : ${diagonal2}`);
                                if (diagonal2 === 5) {
                                    alert("게임끝");
                                }

                            } else {
                                diagonal2 = 1;
                                console.log(`왼쪽대각선초기값: ${diagonal2}`);
                            }

                            //세로
                            if (wrows[i][j] === wrows[i + 1][j]) {
                                colcount++
                                console.log(`세로연속값 : ${colcount}`);
                                if (colcount === 5) {
                                    alert("게임끝");
                                }

                            } else {
                                colcount = 1;
                                console.log(`세로초기값: ${colcount}`);
                            }
                            //가로 
                            if (wrows[i][j] - wrows[i][j + 1] === 1) {
                                rowwcount++
                                console.log(`가로연속값 : ${rowwcount}`);
                                if (rowwcount === 5) {
                                    alert("게임끝");
                                }
                            } else {
                                rowwcount = 1;
                                console.log(`가로초기값: ${rowwcount}`);
                            }
                        }
                    }
                    console.log(wrows);
                    wcount += 1;


                };
                turn++;
            } else {
                if (el.classList.contains('white') || el.classList.contains('black')) {
                    alert("이미바둑알이있습니다.");
                } else {
                    el.classList.add('black');
                    document.querySelector('.bcount').innerHTML = `${bcount}`;
                    whitePause();
                    blacktimeReset();
                    bcount += 1;

                    // console.log(`흑돌카운트: ${bcount}`);
                    brows[r].push(Number(el.classList[0].slice(4, 7)));
                    brows[r].sort(function (a, b) {
                        return a - b;
                    });
                    // console.log(brows);
                };
                turn++;

            };

        });

    });

});