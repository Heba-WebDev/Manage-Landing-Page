
let isMobileNavOpen = false;
let mobileNavIcon = document.querySelector(".navbar__mobile__icon");

mobileNavIcon.addEventListener('click', openMobileNav);

function openMobileNav() {
    isMobileNavOpen = !isMobileNavOpen;

    if(isMobileNavOpen) {
        mobileNavIcon.src = "/images/icon-close.svg";
    } else {
        mobileNavIcon.src = "/images/icon-hamburger.svg";
    }
}

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

let emailRegx = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

let userEmail = document.getElementById("email");

let emailErrorMessage = document.querySelector(".footer__email__error");

let emailInputField = document.querySelector("#email");

let submitUserEmail = document.getElementById("userSubmit");

submitUserEmail.addEventListener('click', validateEmail)

function validateEmail(event) {
 event.preventDefault();

 if(emailRegx.test(userEmail.value)) {
    userEmail.value = '';
    emailErrorMessage.style.display = "none";
    emailInputField.style.border = "none";
 } else {
    emailErrorMessage.style.display = "block";
    emailInputField.style.border = "1px solid var(--bright-red)";
 }

}

emailInputField.addEventListener('focus', clearErrorMessage)

function clearErrorMessage() {
    emailErrorMessage.style.display = "none";
    emailInputField.style.border = "none";
}


