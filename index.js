const burgerBtn = document.querySelector('.burger')
const faBtn = document.querySelector('.fa-bars')
const fatimeBtn = document.querySelector('.fa-times')
const nav = document.querySelector('nav ul')


const handleNav = () => {
    nav.classList.toggle('active')
    burgerBtn.classList.toggle('active')
    faBtn.classList.toggle('hide')
    fatimeBtn.classList.toggle('hide')
}


burgerBtn.addEventListener('click', handleNav)