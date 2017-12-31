//타이머
let progressValue = document.querySelector('.progress__value');
let progressValue2 = document.querySelector('.progress__value2');
let limitValue = document.querySelector('.limit__value');
let limitValue2 = document.querySelector('.limit__value2');

let RADIUS = 54;
let r = 30;
let CIRCUMFERENCE = 2 * Math.PI * RADIUS;
let cr = 2 * Math.PI * r;

// 타이머
let whitetimer = 5;
let whiteinterval = 0;
let blackinterval = 0;
let whitetime = 3;
let blacktimer = 5;
let blacktime = 3;


function whitePause() {
    if (whiteinterval === 0) {
        whiteinterval = setInterval(function () {
            whitetimer--;
            progressValue.style.strokeDashoffset = CIRCUMFERENCE * (1 - (whitetimer * 2 / 10));
            progressValue.style.strokeDasharray = CIRCUMFERENCE;
            limitValue.style.strokeDashoffset = cr * (1 - (whitetime * 3 / 9));
            limitValue.style.strokeDasharray = cr;
            document.querySelector('.whitecounttxt').innerHTML = whitetimer;
            document.querySelector('.whitelimittxt').innerHTML = whitetime;
            if (whitetimer === 0) {
                whitetimer = 5;
                whitetime--;
                if (whitetime < 0) {
                    alert("게임끝")
                }
            }
        }, 1000);

    } else {
        clearInterval(whiteinterval);
        whiteinterval = 0;

    }
}

function blakcPause() {
    if (blackinterval === 0) {
        blackinterval = setInterval(function () {
            blacktimer--;
            progressValue2.style.strokeDashoffset = CIRCUMFERENCE * (1 - (blacktimer * 2 / 10));
            progressValue2.style.strokeDasharray = CIRCUMFERENCE;
            limitValue2.style.strokeDashoffset = cr * (1 - (blacktime * 3 / 9));
            limitValue2.style.strokeDasharray = cr;
            document.querySelector('.blackcounttxt').innerHTML = blacktimer;
            document.querySelector('.blacklimittxt').innerHTML = blacktime;
            if (blacktimer === 0) {
                blacktimer = 5;
                blacktime--;
                if (blacktime < 0) {
                    alert("게임끝")
                }
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
///타이머끝

//게임세팅
let turn = 1;
let wrows = new Array();
let brows = new Array();
let wcount = 1;
let bcount = 1;

let rowwcount = 1;
// let colcount = 1;
let diagonal = 1;
let diagonal2 = 1;

let rowwcountb = 1;
let colcountb = 1;
let diagonalb = 1;
let diagonal2b = 1;
let whiteSamearry = new Array();
let sameNum;


document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.col').forEach(el => {

        let r = el.closest('.row').classList[0].slice(4, 7);
        //각각의 배열
        // wrows[r] = new Array();

        el.addEventListener('click', e => {

            if (turn % 2 !== 0) {
                if (el.classList.contains('white') || el.classList.contains('black')) {
                    alert("이미바둑알이있습니다.");
                } else {
                    el.classList.add('white');
                    // blakcPause();
                    // whitetimeReset();
                    let wrr = new Array();
                    wrr.push(Number(r), Number(el.classList[0].slice(4, 7)));
                    wrows.push(wrr);
                    // judgeCol();
                    judgediagonal();
                  
                    // judgerow();


                    // if (wrows.length >= 2) {
                    //     let colcount = 1;
                    //     for (let i = 0, j = 1; i < wrows.length - 1, j < wrows.length; i++, j++) {
                    //         if (wrows[i][0] === wrows[j][0] - 1 && wrows[i][1] === wrows[j][1]) {
                    //             // wrows[]
                    //             colcount++
                    //             console.log(colcount);
                    //             if (colcount >= 5) {
                    //                 alert('게임끝');
                    //             }
                    //         }else{
                    //             colcount = 1;
                    //             console.log(colcount);
                    //         }
                    //     }

                    // }

                };
                turn++;
            } else {
                if (el.classList.contains('white') || el.classList.contains('black')) {
                    alert("이미바둑알이있습니다.");
                } else {
                    el.classList.add('black');
                    // whitePause();
                    // blacktimeReset(); 

                    //배열추가
                    let brr = new Array();
                    brr.push(Number(r), Number(el.classList[0].slice(4, 7)));
                    brows.push(brr);
                    // brows.sort(function (a, b) {
                    //     return b -a;
                    // }); 정렬
                    console.log(brows);
                };
                turn++;
            };
        });
    });
});

// function whitejudge() {

//     let diagonal = 1;
//     let rowwcount = 1;
//     let colcount = 1;
//     let diagonal2 = 1;


//대각선2

//         if (wrows[i + 1].includes(wrows[i][j] + 1)) {
//             diagonal2++
//             console.log(`왼쪽대각선연속값 : ${diagonal2}`);
//             if (diagonal2 >= 5) {
//                 alert("게임끝");
//             }
//         } else {
//             diagonal2 = 1;
//             // console.log(`왼쪽대각선초기값: ${diagonal2}`);
//         }
//         //세로

//         if (wrows[i + 1].includes(wrows[i][j])) {
//             colcount++
//             console.log(`세로연속값 : ${colcount}`);
//             if (colcount >= 5) {
//                 alert("게임끝");
//             }
//         } else {
//             colcount = 1;
//             // console.log(`세로초기값: ${colcount}`);
//         }
//         //가로 
//         if (wrows[i][j] - wrows[i][j + 1] === 1) {
//             rowwcount++
//             console.log(`가로연속값 : ${rowwcount}`);
//             if (rowwcount >= 5) {
//                 alert("게임끝");
//             }
//         } else {
//             rowwcount = 1;
// console.log(`가로초기값: ${rowwcount}`);
//     }
// }
// }
// console.log(`오른쪽대각선연속값 : ${diagonal}`);
// console.log(`오른쪽대각선초기값: ${diagonal}`);
// console.log(`왼쪽대각선연속값 : ${diagonal2}`);
// console.log(`왼쪽대각선초기값: ${diagonal2}`);
// console.log(`세로연속값 : ${colcount}`);
// console.log(`세로초기값: ${colcount}`);
// console.log(`가로연속값 : ${rowwcount}`);
// console.log(`가로초기값: ${rowwcount}`);


// function blackjudge() {
//     console.log(brows);
//     for (let i = 1; i < brows.length; i++) {
//         if (brows[i].length === 0) {

//         } else {
//             console.log(i,brows[i]);

//         }
//         for (let j = 0; j < brows[i].length; j++) {
//대각선1
// if (i === 15 && brows[i][j] === brows[i - 1][j] + 1 && brows[i][j] === brows[i - 2][j] + 2 && brows[i][j] === brows[i - 3][j] + 3 && brows[i][j] === brows[i - 4][j] + 4){
//     console.log("aaaaaaa");
//     alert("게임끝");
// }


// if (brows[i][j] === brows[i - 1][j] - 1 && brows[i][j] === brows[i - 2][j] - 2 && brows[i][j] === brows[i - 3][j] - 3 && brows[i][j] === brows[i - 4][j] - 4) {
//     console.log("aaaaaaa");
//     alert("게임끝");
// diagonalb++
// console.log(`흑돌오른쪽연속값 : ${diagonalb}`);
// if (diagonalb === 5) {
//     alert("게임끝");
// }
// }

//대각선2
// if (brows[i][j] + 1 === brows[i + 1][j]) {
//     diagonal2b++
//     console.log(`흑돌왼쪽대각선연속값 : ${diagonal2b}`);
//     if (diagonal2b === 5) {
//         alert("게임끝");
//     }
// } else {
//     diagonal2b = 1;
//     // console.log(`흑돌왼쪽대각선초기값: ${diagonal2b}`);
// }
//세로
// if (brows[i][j] === brows[i + 1][j]) {
//     colcountb++
//     console.log(`흑돌세로연속값 : ${colcountb}`);
//     if (colcountb === 5) {
//         alert("게임끝");
//     }
// } else {
//     colcountb = 1;
//     // console.log(`흑돌세로초기값: ${colcountb}`);
// }
//가로 
//     if (brows[i][j] - brows[i][j + 1] === 1) {
//         rowwcountb++
//         console.log(`흑돌가로연속값 : ${rowwcountb}`);
//         if (rowwcountb === 5) {
//             alert("게임끝");
//         }
//     } else {
//         rowwcountb = 1;
//         // console.log(`흑돌가로초기값: ${rowwcountb}`);
//     }
//     }
// }
// console.log(`흑돌오른쪽연속값 : ${diagonalb}`);
// console.log(`흑돌오른쪽초기값: ${diagonalb}`);
// console.log(`흑돌왼쪽대각선연속값 : ${diagonal2b}`);
// console.log(`흑돌왼쪽대각선초기값: ${diagonal2b}`);
// console.log(`흑돌세로연속값 : ${colcountb}`);
// console.log(`흑돌세로초기값: ${colcountb}`);
// console.log(`흑돌가로연속값 : ${rowwcountb}`);
// console.log(`흑돌가로초기값: ${rowwcountb}`);
// }


function judgeCol() {
    let wcolcount = 1;
    wrows.sort(function (a, b) {
        return a[1] - b[1]; //col값정열
    });
    const colsamerow = {}; //같은 col 모으기

    for (let c of wrows) {
        if (colsamerow[c[1]] === undefined) {
            colsamerow[c[1]] = [];
        }
        colsamerow[c[1]].push(c[0]);
        colsamerow[c[1]].sort(function (a, b) {
            return a - b;
        })
    }
    for (let item in colsamerow) {
        for (let i = 0, j = 1; i < colsamerow[item].length - 1, j < colsamerow[item].length; i++, j++) {
            console.log(colsamerow[item])
            if (colsamerow[item].length > 4 && colsamerow[item][i] === colsamerow[item][j] - 1) {
                wcolcount++;
                console.log(wcolcount);
                if (wcolcount === 5) {
                    alert('게임끝');
                }
            } else {
                wcolcount = 1;
                console.log(wcolcount);
            }
        }
    }
    console.log(colsamerow);
    console.log(wrows);
}
function judgerow() {
    let rowwcount = 1;
    wrows.sort(function (a, b) {
        return a[1] - b[1]; //col값정열
    });
    const rowsamecol = {}; //같은 col 모으기

    for (let c of wrows) {
        if (rowsamecol[c[1]] === undefined) {
            rowsamecol[c[1]] = [];
        }
        rowsamecol[c[1]].push(c[0]);
        rowsamecol[c[1]].sort(function (a, b) {
            return a - b;
        })
    }
    for (let item in rowsamecol) {
        for (let i = 0, j = 1; i < rowsamecol[item].length - 1, j < rowsamecol[item].length; i++ , j++) {
            console.log(rowsamecol[item])
            if (rowsamecol[item].length > 4 && rowsamecol[item][i] === rowsamecol[item][j] - 1) {
                rowwcount++;
                console.log(rowwcount);
                if (rowwcount === 5) {
                    alert('게임끝');
                }
            } else {
                rowwcount = 1;
                console.log(rowwcount);
            }
        }
    }
    console.log(rowsamecol);
    console.log(wrows);
}

function judgediagonal() {
    let samediagonalcount = 1;
    ; //같은 col 모으기
    const samediagonalarry = [];
    wrows.sort(function (a, b) {
        if (a[0] === b[0]) {
            let x = a[1];
            let y = b[1];
            return x < y ? -1 : 1; //이중배열정렬
        }
        return a[0] - b[0];
    });
   
    console.log(wrows);
    for (let i=0; i <wrows.length-1; i ++) {
        samediagonalarry[wrows[i]] = [];
        for (let j = 1; j < wrows.length; j++){
           
            if (wrows[i][0] === wrows[j][0] - 1 && wrows[i][1] === wrows[j][1] - 1 || wrows[i][0] === wrows[j][0] - 2 && wrows[i][1] === wrows[j][1] - 2 || wrows[i][0] === wrows[j][0] - 3 && wrows[i][1] === wrows[j][1] - 3 || wrows[i][0] === wrows[j][0] - 4 && wrows[i][1] === wrows[j][1] - 4) {
                samediagonalarry[wrows[i]].push(wrows[j]);
                console.log(samediagonalarry);
           }
            if (samediagonalarry[wrows[i]].length >= 4) {
                alert('게임끝');
                break;
            }
        }
        console.log(samediagonalcount);
    }
}
    //     } else if (samediagonalarry !== undefined && samediagonalarry[i].length > 0) {
    //         for (let j of samediagonalarry[i]) {
    //             let a = samediagonalarry[i][j] + 1;
    //             let b = samediagonalarry[i + 1];
    //             if (b.includes(j + 1)) {
    //                 samediagonalcount++
    //                 console.log(samediagonalarry, samediagonalcount);
    //             }

    //         }
    //     }
    //     if (samediagonalcount < 5) {
    //         samediagonalcount = 1;
    //         console.log(samediagonalcount);
    //     }
    //     if (samediagonalcount >= 5) {
    //         alert('게임끝');
    //         break;
    //     }
    // }
// }
// function judgediagonal() {
//     let samediagonalcount = 1;
//     ; //같은 col 모으기
//     const samediagonalarry = [];
//     wrows.sort(function (a, b) {
//         if (a[0] === b[0]) {
//             let x = a[1];
//             let y = b[1];
//             return x < y ? -1 : 1; //이중배열정렬
//         }
//         return a[0] - b[0];
//     });
//     for(let d of wrows){
//         if (samediagonalarry[d[0]] === undefined){
//             samediagonalarry[d[0],d[1]] = [];
//         }
//         samediagonalarry[d[0], d[1]].push(d[1]);
//         console.log(samediagonalarry);
//     }
//     console.log(wrows);
//     for (let i = 0; i < samediagonalarry.length; i++) {
       
//         if (samediagonalarry[i] === undefined) {
//             samediagonalcount = 1;
//         } else if (samediagonalarry !== undefined && samediagonalarry[i].length > 0){
//             for (let j of samediagonalarry[i]) {
//             let a = samediagonalarry[i][j]+1;
//             let b = samediagonalarry[i+1];
//             if (b.includes(j+1)) {
//                 samediagonalcount++
//                 console.log(samediagonalarry, samediagonalcount);
//             }
               
//             }
//         }
//         if (samediagonalcount < 5) {
//             samediagonalcount = 1;
//             console.log(samediagonalcount);
//         }
//        if (samediagonalcount >= 5) {
//             alert('게임끝');
//             break;
//         }
//     }
// }



function judgerow() {
    wrows.sort(function (a, b) {
        return a[0] - b[0]; //row값정열
    });
    console.log(wrows);
}