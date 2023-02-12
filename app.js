const upButton = document.querySelector('.up-button')
const downButton = document.querySelector('.down-button')

const sidebar = document.querySelector('.sidebar')

const container = document.querySelector('.container')

const mainSlide = document.querySelector('.main-slide')
const slidesCount = mainSlide.querySelectorAll('div').length

sidebar.style.top = `-${(slidesCount - 1) * 100}vh`

let activeSlideIndex = 0

upButton.addEventListener('click', () => {
  changeSlide('up')
})


downButton.addEventListener('click', () => {
  changeSlide('down')
})

function changeSlide(direction) {
  if (direction === 'up') {
    activeSlideIndex++
    console.log('up');
    if (activeSlideIndex === slidesCount) {
      activeSlideIndex = 0
    }
  }
  else if (direction === 'down') {
    activeSlideIndex--
    console.log('down');
    if (activeSlideIndex < 0) {
      activeSlideIndex = slidesCount - 1
    }
  }

  const height = container.clientHeight

  mainSlide.style.transform = `translateY(-${activeSlideIndex * height}px)`

  sidebar.style.transform = `translateY(${activeSlideIndex * height}px)`

  console.log(activeSlideIndex * height);
}