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