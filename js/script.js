var triggerButton = document.querySelector(".menu-btn");
var nav = document.querySelector(".nav");
var img = document.querySelector(".my-image-wrapper");
var ul = document.querySelector(".nav-ul");
var li = document.querySelectorAll(".nav-item");
var downArrow = document.querySelector(".downArrow");
var navLinks = document.querySelectorAll(".nav-link")
var navLink = [].slice.call(navLinks);

function navItemsAndTriggerButton(){
  triggerButton.classList.toggle("rotate-button");
  nav.classList.toggle("show");
}
triggerButton.addEventListener("click", function(){
  navItemsAndTriggerButton();
  img.style.height = "100vh";
  ul.style.height = "100vh";
});

navLink.forEach(function(pp){
  pp.addEventListener("click", navItemsAndTriggerButton);
})


// Owl Carousel

$('.owl-carousel').owlCarousel({
  loop:false,
  margin:10,
  nav:false,
  responsive:{
    0:{
        items:1
    },
    600:{
        items:2
    },
    1000:{
        items:3
    }
  }
})

// Setting the scroll button to work
// window.onload = function () { }
document.addEventListener("DOMContentLoaded", function(){
  setInterval(function(){
    downArrow.classList.toggle("home-down-arrow");
  }, 2000);
});
