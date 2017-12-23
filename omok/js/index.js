//시간
moment.locale('ko');
const nowtime = moment().format('LLL');

let turn = 1;
let whitearry =[];
let balckarry =[];

document.addEventListener('DOMContentLoaded', () => {
  
    document.querySelectorAll('.col').forEach(el => {
        //승리판단
        
        el.addEventListener('click', e => {
            console.log(`힌돌배열 :${whitearry}`);
            console.log(`흑돌배열 :${balckarry}`);
            let wcount = 0;
            let bcount = 0;
            for(let a of whitearry){
                if(a === a){
                    wcount ++;
                }
            }
            console.log(`흰돌같은수: ${wcount}`);

            for (let a of balckarry) {
                if (a === a) {
                    bcount++;
                }
            }
            console.log(`흑돌같은수: ${bcount}`);
            
            if(wcount === 5 || bcount === 5){
                alert("게임이 끝났습니다.");
            }

            if (turn % 2 !== 0 ) {
                
                if (el.classList.contains('white') || el.classList.contains('black')) {
                    alert("이미바둑알이있습니다.");
                    
                }else{
                    console.log('흰돌차례');
                    el.classList.add('black');
                    let arr = el.classList.item(0);
                    whitearry += arr[4];
                   
                    console.log(Array.from(el.classList));
                    console.log(Array.from(el.closest('.row').classList));
                };
                turn++;
            }else{
                
                if (el.classList.contains('white') || el.classList.contains('black')) {
                    alert("이미바둑알이있습니다.");
                }else{
                    console.log('검을돌차례');
                    el.classList.add('white');
                    let arr = el.classList.item(0);
                    balckarry += arr[4];
                 
                    console.log(Array.from(el.classList));
                    console.log(Array.from(el.closest('.row').classList));
                };
                turn++;
            };
        });
    });
});

//승리판단

