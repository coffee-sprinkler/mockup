const btnHamburger = document.querySelector('#btnHamburger');
const body = document.querySelector('body');
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay');
const fadeElems = document.querySelectorAll('.has-fade');
const ingredientsBtn = document.querySelector('.ingredients-button');

btnHamburger.addEventListener('click', function () {
  if (header.classList.contains('open')) {
    body.classList.remove('noscroll');
    header.classList.remove('open');
    fadeElems.forEach(function (element) {
      element.classList.remove('fade-in');
      element.classList.add('fade-out');
    });
  } else {
    body.classList.add('noscroll');
    header.classList.add('open');
    fadeElems.forEach(function (element) {
      element.classList.remove('fade-out');
      element.classList.add('fade-in');
    });
  }
});

const MOBILE = 428;

const mobileView = () => {
  ingredientsBtn.innerHTML =
    'GET PURPOSE NOW <i class="fa-solid fa-play ms-3"></i>';
};

const webView = () => {
  ingredientsBtn.innerHTML = `View Our Full List of Ingredients
  <img class="new__window ms-3" src="./assets/images/new-window.png" alt="new-window">`;
};

if (window.innerWidth <= MOBILE) {
  mobileView();
} else {
  webView();
}
