//시간
moment.locale('ko');
const nowtime = moment().format('LLL');

let turn = 1;

let wrows = new Array();
let brows = new Array();
let wcount = 1;
let bcount = 1;

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
                            console.log(`흰돌카운트: ${wcount}`);
                            wrows[r].push(Number(el.classList[0].slice(4, 7)));
                            wrows[r].sort(function (a, b) {
                                return a - b;
                            });
                            // console.log(wrows);
                            wcount += 1;

                        };
                        turn++;
                    } else {
                        if (el.classList.contains('white') || el.classList.contains('black')) {
                            alert("이미바둑알이있습니다.");
                        } else {
                            el.classList.add('black');
                            bcount += 1;
                            console.log(`흑돌카운트: ${bcount}`);
                            brows[r].push(Number(el.classList[0].slice(4, 7)));
                            brows[r].sort(function (a, b) {
                                return a - b;
                            });
                            // console.log(brows);
                        };
                        turn++;

                    };
                    //승리판단
                    function jugde(str) {
                        return str
                    }
                    let a = 1;
                    let b = new Array();
                    let c = 0;
                    let d = new Array();
                    for (let i = 1; i < wrows.length; i++) {
                        //수정해야될부분 세로 확인
                        for (let j = 0; j < wrows[i].length; j++) {
                            let key = wrows[i][j]
                            console.log(key);
                            if (!d[key]) {
                                d[key] = 1
                            } else {
                                d[key] = d[key] + 1;
                            }
                            if(d[5]===5){
                                alert("게임끝");
                            }
                            console.log(d);
                    
                       

                        if (wrows[i][j + 1] - wrows[i][j] === 1) {
                            a++
                            if (a === 5) {
                                alert("게임끝");
                            }
                        }
                    }
                }

            

            });

    });

});





//승리판단