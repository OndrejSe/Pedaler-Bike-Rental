const navBar = document.querySelector('.nav-bar')
const navMain = document.querySelector('.nav-main')
const menuButton = document.querySelector('.menu-button')
const menuIcon = document.querySelector('.menu-button i')
const navMenu = document.querySelector('.nav-menu')
const navList = document.querySelector('.nav-list')
const navLogo = document.querySelector('.nav-main .logo')

const createNavLinks = (list) => {
    const sectionNames = ['about', 'booking', 'reviews', 'help']

    list.innerHTML = sectionNames.map((sectionName) => {
        return `<li><a href='#${sectionName}' class='nav-link'>${sectionName}</a></li>`
    }).join('')

    const navLinks = document.querySelectorAll('.nav-link') 

    navLinks.forEach((link) => {
        link.addEventListener('click', (e) => {
            preventNavOverflow(e)
            closeMobileMenu()
        })
    })
}

const openMobileMenu = () => {
    const linksHeight = navList.getBoundingClientRect().height

    menuIcon.classList.add('fa-xmark')
    menuIcon.classList.remove('fa-bars')
    navMenu.style.height = `${linksHeight}px`
}

const closeMobileMenu = () => {
    menuIcon.classList.remove('fa-xmark')
    menuIcon.classList.add('fa-bars')
    navMenu.style.height = 0
}

const mobileMenuToggle = () => {    
    if(menuIcon.classList.contains('fa-bars')){
        openMobileMenu()
    } else {
        closeMobileMenu()
    }
}

const solidNav = () => {
    const scrollValue = window.scrollY
    const navHeight = navBar.getBoundingClientRect().height

    if(scrollValue > navHeight){
        navBar.classList.add('solid-nav')
    } else {
        navBar.classList.remove('solid-nav')
    }
}

const menuCenter = () => {
    const mobileMenuQuery = window.matchMedia('(min-width: 768px)')
    const navMenuWidth = navList.getBoundingClientRect().width
    const logoWidth = navLogo.getBoundingClientRect().width
    
    if (mobileMenuQuery.matches) {
        navMain.style.flexBasis = `calc(50% + ${navMenuWidth/2}px)`
    } else {
        navMain.style.flexBasis = `calc(50% + ${logoWidth/2}px)`
    }
}

const backToStart = () => {
    window.scrollTo({
        top: 0,
        left: 0,
    })
}

const preventNavOverflow = (e) => {
    e.preventDefault()

    const id = e.currentTarget.getAttribute('href').slice(1)
    const element = document.getElementById(id)
    const navHeight = navBar.getBoundingClientRect().height
    let position = element.offsetTop - navHeight

    window.scrollTo({
        left: 0,
        top: position,
    })
}

const init = () => {
    createNavLinks(navList)
    solidNav()
    menuCenter()
}

window.addEventListener('DOMContentLoaded', init)
window.addEventListener('scroll', solidNav)
window.addEventListener('resize', () => { 
    menuCenter()
    solidNav()
})

navLogo.addEventListener('click', backToStart)

menuButton.addEventListener('click', () => {
    mobileMenuToggle()
})

export {
    preventNavOverflow,
    createNavLinks,
}