// Import code for sections and components
import './src/javascript/nav.js'
import './src/javascript/about.js'
import './src/javascript/booking.js'
import './src/javascript/reviews.js'
import './src/javascript/help.js'
import './src/javascript/footer.js'

import { addClass } from './src/javascript/utils/utils.js'

const preloader = document.getElementById('preloader')

// Settings for AOS animations script
AOS.init({
    duration: 800,
    offset: 50,
    once: true
})

window.addEventListener("load", () => {
    addClass(preloader, 'hide')
})