import { createNavLinks } from './nav.js';
import brandsData from './data/brandsData.js';

const footerNav = document.querySelector('.footer-nav')
const socialLinks = document.querySelector('footer .social-links')
const paymentMethods = document.querySelector('footer .payment-methods')

const createCopyrightText = () => {
    const copyrightSpan = document.getElementById('copyright')
    const currentYear = new Date().getFullYear();

    copyrightSpan.innerHTML = `<i class='fa-regular fa-copyright'></i> ${currentYear} Pedaler Bike Rental. All&nbsp;rights&nbsp;reserved.`
}

const displaySocialLinks = () => {
    const socialMedia = brandsData.socialMedia
    
    socialLinks.innerHTML = socialMedia.map((brand) => {
        return `<abbr title='${brand.title}'>
                    <a href='${brand.link}' target='_blank'><i class='${brand.icon}'></i></a>
                </abbr>`
    }).join('')
}

const displayPaymentMethods = () => {
    const payments = brandsData.paymentMethods
    
    paymentMethods.innerHTML = payments.map((brand) => {
        return `<abbr title='${brand.title}'>
                    <i class='${brand.icon}'></i>
                </abbr>`
    }).join('')
}

const init = () => {
    createNavLinks(footerNav)
    displaySocialLinks()
    displayPaymentMethods()
    createCopyrightText()
}

window.addEventListener('DOMContentLoaded', init)