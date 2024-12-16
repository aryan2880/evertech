//changing navebar 
window.addEventListener('scroll', () => {
   document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 100)
})


//show hide faq answer

const faqs = document.querySelectorAll('.faq');

faqs.forEach(faq => {
   faq.addEventListener('click', () => {
      faq.classList.toggle('open');

      //changing icon
      const icon = faq.querySelector('.faq__icon i');
      if(icon.className === 'fa-solid fa-plus'){
         icon.className = "fa-solid fa-minus";
      }else{
          icon.className = "fa-solid fa-plus";
      }
   })
})


///////////////////

const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');

let currentIndex1 = 0;

function moveToNextSlide() {
  currentIndex1 = (currentIndex1 + 1) % slides.length; // Loop back to the first slide
  slider.style.transform = `translateX(-${currentIndex1 * 100}%)`;
}

// Change slide every 3 seconds
setInterval(moveToNextSlide, 3000);


/////////////
 // JavaScript for Auto-Sliding
 const land = document.querySelectorAll('.land');
 let currentIndex = 0;

 function showNextSlide() {
   land[currentIndex].classList.remove('prev');
   land[currentIndex].classList.add('active');

   currentIndex = (currentIndex + 1) % land.length;

   land[currentIndex].classList.remove('active');
   land[currentIndex].classList.add('prev');
 }

 setInterval(showNextSlide, 2000); // Change slides every 2 seconds

//show/hode nav menu 
const menu = document.querySelector(".nav_menu");
const menubtn =document.querySelector("#open-menu-btn");
const closebtn = document.querySelector("#close-menu-btn");

menubtn.addEventListener('click',() =>{
   menu.style.display = "flex";
   closebtn.style.display ="inline-block";
   menubtn.style.display="none";
})
//close nav menu 
const closeNav = () =>{
   menu.style.display = "none";
   closebtn.style.display ="none";
   menubtn.style.display="inline-block";
}

closebtn.addEventListener('click', closeNav)
