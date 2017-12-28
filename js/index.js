function carouselbtn() {
    let collapse = document.querySelector('.collapse');
    let collapsecontent = document.querySelector('.collapsecontent');

    if (collapse.classList.contains('collapseshow')) {
        collapse.classList.remove('collapseshow');
        collapsecontent.classList.remove('collapsecontentshow');

    } else {
        collapse.classList.add('collapseshow');
        collapsecontent.classList.add('collapsecontentshow');
    }

}


function modalbtn() {
    let modalbtn = document.querySelector('.modal-btn');
    let modalwarp = document.querySelector('.modalwarp');
    let modal = document.querySelector('.modal');

    if (modal.classList.contains('modalshow')) {
        modal.classList.remove('modalshow');
    } else {
        modal.classList.add('modalshow');
        modalwarp.classList.add('modalwarpshow');
    }

}

function modalclose() {
    let modalwarp = document.querySelector('.modalwarp');
    let modal = document.querySelector('.modal');
    modal.classList.remove('modalshow');
    modalwarp.classList.remove('modalwarpshow');

}


let dcount = 0;
let scount = 1;


function showSlides() {
    let slides = document.querySelectorAll('.img');

    if (dcount === 2) {
        scount = 0;
    }
    if (scount === 1) {
        dcount = 0;
    }
    console.log(dcount, scount);
   
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.animation = null;
        slides[i].style.zIndex = null;
        slides[i].style.display = 'none';
    }
    slides[dcount].style.animation = 'disappear 0.5s';
    slides[dcount].style.zIndex = '0';
    slides[dcount].style.display = 'block';
    slides[scount].style.animation = 'show 0.5s';
    slides[scount].style.display = 'block';
    slides[scount].style.zIndex = '1';
    
    dcount++;
    scount++;
}