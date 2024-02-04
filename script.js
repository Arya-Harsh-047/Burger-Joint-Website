const headerContent = document.querySelector('.header-content');
const hamburgerContainer  = document.querySelector('.hamburger-menu-container')
const closeIcon = document.querySelector('.close-icon')
let topButton = document.querySelector('.go-to-top');
const nav = document.querySelector('nav')

hamburgerContainer.addEventListener('click',(e)=>{
    e.stopPropagation()
    headerContent.classList.add('menu-open')
})

nav.addEventListener('click', (e) => {
    e.stopPropagation()
})

closeIcon.addEventListener('click', ()=>{
    headerContent.classList.remove('menu-open')
})


window.addEventListener('click', () => {
    headerContent.classList.remove('menu-open')
})

topButton.addEventListener('click',()=>{
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
})
