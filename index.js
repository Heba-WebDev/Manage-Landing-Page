

let testimonal1 = document.getElementById("testimonails--1");
let testimonal2 = document.getElementById("testimonails--2");
let testimonal3 = document.getElementById("testimonails--3");
let testimonal4 = document.getElementById("testimonails--4");



let sliderButton1 = document.querySelector("#testimonailsbtn--1");
let sliderButton2 = document.querySelector("#testimonailsbtn--2");
let sliderButton3 = document.querySelector("#testimonailsbtn--3");
let sliderButton4 = document.querySelector("#testimonailsbtn--4");

sliderButton1.addEventListener('click', getFirstTestimonial)


function getFirstTestimonial() {
    testimonal1.style.display = 'grid'
    sliderButton1.classList.add('selected');

    testimonal2.style.display = 'none'
    testimonal3.style.display = 'none'
    testimonal4.style.display = 'none'
    sliderButton2.classList.remove('selected');
    sliderButton3.classList.remove('selected');
    sliderButton4.classList.remove('selected');
}



sliderButton2.addEventListener('click', getSecondTestimonial)


function getSecondTestimonial() {
    testimonal2.style.display = 'grid'
    sliderButton2.classList.add('selected');

    testimonal1.style.display = 'none'
    testimonal3.style.display = 'none'
    testimonal4.style.display = 'none'
    sliderButton1.classList.remove('selected');
    sliderButton3.classList.remove('selected');
    sliderButton4.classList.remove('selected');
}



sliderButton3.addEventListener('click', getThirdTestimonial)


function getThirdTestimonial() {
    testimonal3.style.display = 'grid'
    sliderButton3.classList.add('selected');

    testimonal1.style.display = 'none'
    testimonal2.style.display = 'none'
    testimonal4.style.display = 'none'
    sliderButton1.classList.remove('selected');
    sliderButton2.classList.remove('selected');
    sliderButton4.classList.remove('selected');
}



sliderButton4.addEventListener('click', getFourthTestimonial)


function getFourthTestimonial() {
    testimonal4.style.display = 'grid'
    sliderButton4.classList.add('selected');

    testimonal1.style.display = 'none'
    testimonal2.style.display = 'none'
    testimonal3.style.display = 'none'
    sliderButton1.classList.remove('selected');
    sliderButton2.classList.remove('selected');
    sliderButton3.classList.remove('selected');
}


