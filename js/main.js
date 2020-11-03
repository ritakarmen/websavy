/*slider principal home*/

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}
/***---*** */
/* slider list home*/

let i = 1;
for(let li of carousel.querySelectorAll('li')) {
  li.style.position = 'relative';
  li.insertAdjacentHTML('beforeend', `<span style="position:absolute;left:0;top:0">${i}</span>`);
  i++;
}


let width = 130; 
let count = 3; 

let list = carousel.querySelector('ul');
let listElems = carousel.querySelectorAll('li');

let position = 0; 

carousel.querySelector('.prev').onclick = function() {

  position += width * count;
  
  position = Math.min(position, 0)
  list.style.marginLeft = position + 'px';
};

carousel.querySelector('.next').onclick = setInterval(function() {

  position -= width * count;
 
  position = Math.max(position, -width * (listElems.length - count));
  list.style.marginLeft = position + 'px';
}, 5000);
