const btnHamburger = document.querySelector('#btnHamburger')
const body = document.querySelector('body')
const header = document.querySelector('.header')
const overlay = document.querySelector('.overlay')
const fadeElems = document.querySelectorAll('.has-fade')
const ingredientsBtn = document.querySelector('.ingredients-button')

btnHamburger.addEventListener('click', function () {
  if (header.classList.contains('open')) {
    body.classList.remove('noscroll')
    header.classList.remove('open')
    fadeElems.forEach(function (element) {
      element.classList.remove('fade-in')
      element.classList.add('fade-out')
    })
  } else {
    body.classList.add('noscroll')
    header.classList.add('open')
    fadeElems.forEach(function (element) {
      element.classList.remove('fade-out')
      element.classList.add('fade-in')
    })
  }
})

const bundleItems = document.querySelectorAll('.bundle-item')
const rightButton = document.querySelector('[data-right]')
const leftButton = document.querySelector('[data-left]')

const MOBILE = 428

const showCard = steps => {
  bundleItems.forEach((element, value) => {
    if (value == steps) {
      element.classList.add('show')
    } else {
      element.classList.remove('show')
    }
  })
}

const mobileView = () => {
  ingredientsBtn.innerHTML =
    'GET PURPOSE NOW <i class="fa-solid fa-play ms-3"></i>'

  let steps = 0
  const moveRight = rightButton.addEventListener('click', () => {
    if (steps < 2) {
      steps++
    } else {
      steps = 0
    }
    showCard(steps)
  })
  const moveLeft = leftButton.addEventListener('click', () => {
    if (steps == 0) {
      steps = 2
    } else {
      steps--
    }
    showCard(steps)
  })
}

const webView = () => {
  ingredientsBtn.innerHTML = `View Our Full List of Ingredients
  <img class="new__window ms-3" src="./assets/images/new-window.png" alt="new-window">`
}

window.innerWidth <= MOBILE ? mobileView() : webView()

window.addEventListener('resize', () => {
  window.innerWidth <= MOBILE ? mobileView() : webView()
})
