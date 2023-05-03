const navbar = document.querySelector('.nav__mobile-list')
const navBtn = document.querySelector('.nav__mobile_btn')
const scrollBtn = document.querySelector('.scroll-btn')

//скрытие/показ кнопки прокрутки
window.addEventListener('scroll', showScrollButton)
scrollBtn.addEventListener('click', scrollWindowToTop)

//появление и исчезновение кнопки
function showScrollButton() {
    if (window.scrollY > 500) {
        scrollBtn.style.animation = 'appearance 1s forwards' 
        scrollBtn.style.pointerEvents = 'all'   
    } else if (getComputedStyle(scrollBtn).getPropertyValue('opacity') == '1') {
        scrollBtn.style.animation = 'disappearance 1s forwards'
        scrollBtn.style.pointerEvents = 'none' 
    }  
}

// скрытие навбара
document.addEventListener('click', (event) => {
	const withinBoundaries = event.composedPath().includes(navbar) || event.composedPath().includes(navBtn)
	if (!withinBoundaries) {
		navbar.classList.remove('open')
	}
})

// анимация для навбара
navBtn.onclick = () => {
    navbar.style.display = 'flex'
    navbar.classList.toggle('open')
}

//плавный скролл до верха
function scrollWindowToTop() {
    let coffScroll = 10
    let start = setInterval(() => {
        if (window.scrollY > 0) {
            coffScroll += 0.7
            document.documentElement.scrollTop = window.scrollY - coffScroll
        }
        else clearInterval(start)
    }, 1)
}