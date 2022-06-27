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