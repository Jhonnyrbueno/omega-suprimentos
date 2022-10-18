const item = document.querySelectorAll("[data-anime]");

const animeScroll = () => {
    const windowTop = window.pageYOffset + window.innerHeight * 0.95;
    
    item.forEach(element => {
        if (windowTop > element.offsetTop) {
            element.classList.add('animate')
        } else {
            element.classList.remove("animate");
        }
    })
}
animeScroll ()

window.addEventListener("scroll", ()=>{
    animeScroll();
});

'use strict';

var onTop = false;

// JQuery
$(window).scroll(function() {
  let scrollPosition = $(window).scrollTop();
  
  if(scrollPosition < 10 && !onTop) {
    onTop = true;
    $('.navbar').addClass('onTop');
  }
  
  if(scrollPosition > 10 && onTop) {
    onTop = false;
    $('.navbar').removeClass('onTop');
  }
});