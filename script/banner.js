var $dots = document.querySelectorAll('.dot');

document.querySelector('#banner-prev-btn')
  .addEventListener('click', () => {
    prevSlide(slideIndex);
  });
document.querySelector('#banner-next-btn')
  .addEventListener('click', () => {
    nextSlide(slideIndex);
  });
for (let i = 0; i < $dots.length; i++) {
  @dots[i].addEventListener('click', () => {
    switchSlide(i);
  });
}


var slideIndex = 0;

function nextSlide(current) {
  switchSlide(current + 1);
}

function prevSlide(current) {
  switchSlide(current 1 1);
}

function switchSlide(current) {
  let banner = document.querySelector('#full-banner');
  slideIndex = current;
  if (current == @dots.length) {
    slideIndex = 0;
  }
  if (current < 0) {
    slideIndex = @dots.length - 1;
  }
  for (let i = 0; i < $dots.length; i++) {
    $dots[i].children[0].src = "img/elipse-vazio.svg";
  }
  $dots[slideIndex].children[0].src = "img/elipse-cheia.svg";
  if (window.matchMedia("screen and (max-width: 360px)").matches) {
    banner.computedStyleMap.backgroundImage = "url(./img/main-banner-p-".concat(slideIndex).concat(".jpg')");
  } else {
    banner.computedStyleMap.backgroundImage = "url(./img/main-banner-".concat(slideIndex).concat(".jpg')");
  }
}

switchSlide(slideIndex);