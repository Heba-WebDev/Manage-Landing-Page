
// the state the shows if the mobile menu is showen or not
let isNavMenuOpen = false;

// the mobile menu button
let mobileMenuBtn = document.querySelector(".navbar__mobile");

// the hamburger/close icon
let mobileNavIcon = document.querySelector(".navbar__mobile__icon");
// the hamburger/close img src 
let navOpenIconSrc = "/images/icon-hamburger.svg";
let NavCloseIconSrc = "/images/icon-close.svg";


// the mobile menu list items
 let mobileNavbar = document.querySelector(".navbar__menu ")




 mobileMenuBtn.addEventListener("click", toggleMobileNavbar)
 
 function toggleMobileNavbar() {

   if(!isNavMenuOpen) {
      mobileNavbar. style.display = "block"
      isNavMenuOpen = true;
      mobileNavIcon.src = NavCloseIconSrc;
      //document.body.style.overflow = "hidden";
   } else {
      mobileNavbar. style.display = "none" 
      isNavMenuOpen = false;
      mobileNavIcon.src = navOpenIconSrc;
      //document.body.style.overflow = "";
   }
};



// mobileNavIcon.addEventListener('click', openMobileNavMenu);



// let testimonal1 = document.getElementById("testimonails--1");
// let testimonal2 = document.getElementById("testimonails--2");
// let testimonal3 = document.getElementById("testimonails--3");
// let testimonal4 = document.getElementById("testimonails--4");



// let sliderButton1 = document.querySelector("#testimonailsbtn--1");
// let sliderButton2 = document.querySelector("#testimonailsbtn--2");
// let sliderButton3 = document.querySelector("#testimonailsbtn--3");
// let sliderButton4 = document.querySelector("#testimonailsbtn--4");

// sliderButton1.addEventListener('click', getFirstTestimonial)


// function getFirstTestimonial() {
//     testimonal1.style.display = 'grid'
//     sliderButton1.classList.add('selected');

//     testimonal2.style.display = 'none'
//     testimonal3.style.display = 'none'
//     testimonal4.style.display = 'none'
//     sliderButton2.classList.remove('selected');
//     sliderButton3.classList.remove('selected');
//     sliderButton4.classList.remove('selected');
// }



// sliderButton2.addEventListener('click', getSecondTestimonial)


// function getSecondTestimonial() {
//     testimonal2.style.display = 'grid'
//     sliderButton2.classList.add('selected');

//     testimonal1.style.display = 'none'
//     testimonal3.style.display = 'none'
//     testimonal4.style.display = 'none'
//     sliderButton1.classList.remove('selected');
//     sliderButton3.classList.remove('selected');
//     sliderButton4.classList.remove('selected');
// }



// sliderButton3.addEventListener('click', getThirdTestimonial)


// function getThirdTestimonial() {
//     testimonal3.style.display = 'grid'
//     sliderButton3.classList.add('selected');

//     testimonal1.style.display = 'none'
//     testimonal2.style.display = 'none'
//     testimonal4.style.display = 'none'
//     sliderButton1.classList.remove('selected');
//     sliderButton2.classList.remove('selected');
//     sliderButton4.classList.remove('selected');
// }



// sliderButton4.addEventListener('click', getFourthTestimonial)


// function getFourthTestimonial() {
//     testimonal4.style.display = 'grid'
//     sliderButton4.classList.add('selected');

//     testimonal1.style.display = 'none'
//     testimonal2.style.display = 'none'
//     testimonal3.style.display = 'none'
//     sliderButton1.classList.remove('selected');
//     sliderButton2.classList.remove('selected');
//     sliderButton3.classList.remove('selected');
// }

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


let testimonailCards = document.querySelectorAll('.testimonials__card');
let testimonialsBtns = document.querySelectorAll('.testimonials__slider__btn');

let carouselSwapSpeed = 3000;
let indexOfCurrentTestimonialCard = 0;
let clearIntervalCarousel;

// testimonailCards.forEach((card, i) => {
//    testimonialsBtns.forEach(btn =>  btn.classList.remove("selected"));
//    testimonialsBtns[indexOfCurrentTestimonialCard].classList.add("selected");

//    testimonialsBtns.addEventListener('click', () => {
//       index = i;
//       startInterval() 
//       showNextTestimonialCard() 
//    })
// })

startInterval() 
function startInterval() {
   setInterval(() => {
      
      indexOfCurrentTestimonialCard++;
      if(indexOfCurrentTestimonialCard === testimonailCards.length) indexOfCurrentTestimonialCard = 0;
      showNextTestimonialCard();
   }, carouselSwapSpeed);
}

showNextTestimonialCard() 

function showNextTestimonialCard() {
   testimonailCards.forEach(card =>  card.classList.remove("active"));
   testimonailCards[indexOfCurrentTestimonialCard].classList.add("active");
   testimonialsBtns.forEach(btn =>  btn.classList.remove("selected"));
   testimonialsBtns[indexOfCurrentTestimonialCard].classList.add("selected");
}