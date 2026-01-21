let mobMenu = document.querySelector('.mobile-menu')
let navList = document.querySelector('.nav-list')

mobMenu.addEventListener('click', abrir)

function abrir() {

    navList.classList.toggle('active')
}