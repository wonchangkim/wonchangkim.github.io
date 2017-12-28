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

let carouselIndex = 1;

function nextslide(n){
    showSlides(carouselIndex += n);
}
function currentSlides(n){
    showSlides(carouselIndex = n);
}

function showSlides(n){
    let slides = document.querySelectorAll('.img');
    if( n > slides.length){
        carouselIndex = 1;
    }
    // if( n < 1){
    //     carouselIndex = slides.length;
    // }
    for(let i = 0; i < slides.length; i++){
        slides[i].style.animation = 'disappear 0.5s';
        
        slides[i].style.zIndex = "0";
    }
  
    slides[carouselIndex-1].style.animation = 'show 0.5s';
  
    slides[carouselIndex - 1].style.zIndex = "1";
    console.log(carouselIndex);
    // slides[carouselIndex - 1].style.animation-name = 'caro1';
}


