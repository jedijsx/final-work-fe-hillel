const menuBtn = document.querySelector('.menu__btn')
const menuList = document.querySelector('.menu__list')
const body = document.querySelector('body')

menuBtn.addEventListener('click', (e) => {
  menuBtn.classList.toggle('active')
  body.classList.toggle('active')
  if (menuList.classList.contains('active')) {
    setTimeout(() => menuList.classList.toggle('active'), 500)
  } else {
    menuList.classList.toggle('active')
  }
})

// get DOM elements
const headersList = document.querySelectorAll('.slider__header')
const notesList = document.querySelectorAll('.slider__note')
const indicatorsList = document.querySelectorAll('.slider__indicator')
const descriptionsList = document.querySelectorAll('.slider__description')

let index = 0;
let interval = 3500;
let heightsArr = [];
let heightMax = null;

setInterval(() => {
  // remove the active classes for the first elements
  headersList[index].classList.toggle('active')
  notesList[index].classList.toggle('active')
  indicatorsList[index].classList.toggle('active')
  // increase the index until the number of elements is exceeded
  index = (index + 1) % headersList.length;
  // set active classes to the following elements
  headersList[index].classList.toggle('active')
  notesList[index].classList.toggle('active')
  indicatorsList[index].classList.toggle('active')
}, interval)

// calculating and changing the height of the description block for the maximum text
descriptionsList.forEach(el => heightsArr.push(el.clientHeight))
heightMax = Math.max(...heightsArr)
descriptionsList.forEach(el => el.style.height = `${heightMax}px`)