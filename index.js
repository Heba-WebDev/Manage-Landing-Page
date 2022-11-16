
/*The mobile navbar*/
let body = document.body

// the header 
let header = document.querySelector(".navbar");

// the mobile menu button
let mobileMenuBtn = document.querySelector(".navbar__mobile");

// the hamburger/close icon
let mobileNavIcon = document.querySelector(".navbar__mobile__icon");
// the hamburger/close img src 
let navOpenIconSrc = "/images/icon-hamburger.svg";
let NavCloseIconSrc = "/images/icon-close.svg";


// the mobile menu list items
 let mobileNavbar = document.querySelector(".navbar__menu")

let shadow = mobileNavbar.dataset.shadow;
console.log(shadow)


 mobileMenuBtn.addEventListener("click", toggleMobileNavbar)
 
 function toggleMobileNavbar() {

   if (mobileNavbar.hasAttribute('data-visible')) {
      mobileMenuBtn.setAttribute("aria-expanded", true);
      body.classList.remove('no-scroll');
      mobileNavIcon.src = navOpenIconSrc;
      document.body.classList.toggle('overlay');
     
   } else {
      mobileMenuBtn.setAttribute("aria-expanded", false);
      body.classList.add('no-scroll');
      mobileNavIcon.src =NavCloseIconSrc;
      document.body.classList.toggle('overlay');
   }

  mobileNavbar.toggleAttribute('data-visible');
   
};

/*The email input submit validation */ 

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


/*The carousel*/

//All the testimonials and carousel buttons corresponding to them
let testimonailCards = document.querySelectorAll('.testimonials__card');
let testimonialsBtns = document.querySelectorAll('.testimonials__slider__btn');

//the speed of the carousel + the global var that has the current shown testimonial + a var to clear 
// the interval if the user clicks on another button instead of the current one 
let carouselSwapSpeed = 4000;
let indexOfCurrentTestimonialCard = 0;
let clearIntervalCarousel;

//looping through the buttons of the carousel to add event listner + reset the global index that controls
//which testimonial is shown + calls the startInterval and showNextTestimonialCard funtions 
testimonialsBtns.forEach((btn, i) => {
   btn.addEventListener('click', () => {
      indexOfCurrentTestimonialCard = i;
      startInterval();
      showNextTestimonialCard();
   })
});

//starts an interval as soon as the page loads to show testimonals 
startInterval() 
function startInterval() {
   if(clearIntervalCarousel) clearInterval(clearIntervalCarousel);
   clearIntervalCarousel =  setInterval(() => {
      
      indexOfCurrentTestimonialCard++;
      if(indexOfCurrentTestimonialCard === testimonailCards.length) indexOfCurrentTestimonialCard = 0;
      showNextTestimonialCard();
   }, carouselSwapSpeed);
}

//this function removes and addes an active class to sliders and a selected class to buttons 
//the active class show the testimonial and the selected class adds a color to the inner of the
//current buttons corrsponding to the current testimonal 
showNextTestimonialCard() 
function showNextTestimonialCard() {
   testimonailCards.forEach(card =>  card.classList.remove("active"));
   testimonailCards[indexOfCurrentTestimonialCard].classList.add("active");
   testimonialsBtns.forEach(btn =>  btn.classList.remove("selected"));
   testimonialsBtns[indexOfCurrentTestimonialCard].classList.add("selected");
}


