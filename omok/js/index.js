//시간
moment.locale('ko');
const nowtime = moment().format('LLL');

let turn = 1;

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.col').forEach(el => {
        el.addEventListener('click', e => {
            if (turn % 2 !== 0 ) {
                console.log(turn);
                if (!el.classList.contains('black')) {

                    console.log(Array.from(el.classList));
                    console.log(Array.from(el.closest('.row').classList));
                    el.classList.add('black');
                } else {
                    alert("이미바둑알이있습니다.");
                };
                turn++;
            }else{
                console.log(turn);
                if (!el.classList.contains('white')) {

                    console.log(Array.from(el.classList));
                    console.log(Array.from(el.closest('.row').classList));
                    el.classList.add('white');
                } else {
                    alert("이미바둑알이있습니다.");
                };
                turn++;
            }
            
           




        })
    })
})