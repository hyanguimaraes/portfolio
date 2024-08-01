//--------- JAVASCRIPT FOR THE CAROUSEL ---------//

//--- VARIABLES ---//

//SLIDE COUNTER
let currentSlide = 0;

//MAX VISIBLE SLIDES
let maxSlides = 3;

//SELECTING THE CAROUSEL HTML ITEMS
const slides = document.querySelectorAll('.carousel-slides');

//SELECTING THE CURRENT SLIDE
let slide;

//SELECTING THE CAROUSEL AFT BUTTON
const aftSlide = document.querySelector('.carousel-aft-button');

//SELECTING THE CAROUSEL FWD BUTTON
const fwdSlide = document.querySelector('.carousel-fwd-button');

//SELECTING THE RADIO BUTTONS
const markings = document.querySelectorAll('.carousel-markings');

//AUTO SELECTING THE FIRST RADIO BUTTON
markings[currentSlide].checked = true;

//AUTO SELECTING THE FIRST SLIDE
slide = slides[currentSlide];


//--- FUNCTIONS ---//
//FUNCTION THAT MAKES THE FIRST SLIDE VISIBLE
function firstSlide () {
    slide.classList.add('carousel-slides-active');
}

//MAKING THE FIRST SLIDE VISIBLE
firstSlide();

//FUNCTION THAT REMOVES THE ACTIVE CLASS ON THE CAROUSEL SLIDES
function removeSlide(){
    slide.classList.remove('carousel-slides-active');
}

//FUNCTION THAT ADDS THE ACTIVE CLASS ON THE CAROUSEL SLIDES
function addSlide(){
    slide.classList.add('carousel-slides-active');
}

//MONITORING CLICKS ON THE AFT CAROUSEL BUTTON AND CAROUSEL RESTART FUNCTION
aftSlide.addEventListener('click', ()=> {

    //REMOVES THE ACTIVE SLIDE
    removeSlide();

    //CONDITIONAL THAT CHECKS IF THE CURRENT SLIDE IS THE FIRST SLIDE AND INVERTS THE LOOP
    if(currentSlide === 0){
        currentSlide = maxSlides;
    } else{
        currentSlide--;
    }

    //SELECTS THE CORRECT SLIDE TO SHOW
    slide = slides[currentSlide];

    //ADDS THE ACTIVE SLIDE
    addSlide();

    //SELECTION OF THE CURRENT SLIDE ACTIVE RADIO BUTTON
    markings[currentSlide].checked = true;
});

//MONITORING CLICKS ON THE FWD CAROUSEL BUTTON AND CAROUSEL RESTART FUNCTION
fwdSlide.addEventListener('click', () => {

    //REMOVES THE ACTIVE SLIDE
    removeSlide();

    //CONDITIONAL THAT CHECKS IF THE CURRENT SLIDE IS THE FIRST SLIDE AND INVERTS THE LOOP
    if(currentSlide === maxSlides){
        currentSlide = 0;
    } else{
        currentSlide++;
    }

    //SELECTS THE CORRECT SLIDE TO SHOW
    slide = slides[currentSlide];

    //ADDS THE ACTIVE SLIDE
    addSlide();

    //SELECTION OF THE CURRENT SLIDE ACTIVE RADIO BUTTON
    markings[currentSlide].checked = true;
});