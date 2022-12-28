const carousel = document.querySelector('.carousel')
const previousButton = carousel.querySelector('.previous-button')
const nextButton = carousel.querySelector('.next-button')

const contents = carousel.querySelector('.carousel__contents')

nextButton.addEventListener('click', event => {
    const currentSlide = contents.querySelector('.is-selected')
    const nextSlide = currentSlide.nextElementSibling
    console.log(nextSlide)
  })