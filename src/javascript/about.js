import aboutData from './data/aboutData.js'
import { addClass } from './utils/utils.js'

const aboutSubcontent = document.getElementById('about-subcontent')

const captionImages = aboutData.captionImages.map((container) => {
    return `<figure class='image-container' data-aos='fade-up'>
                <img src='${container.image}' alt=''>
                <figcaption class='image-overlay'>
                    <span class='caption'>${container.caption}</span>
                </figcaption>
            </figure>`
})

const textContainer = 
    `<div class='text-container' data-aos='fade-up'>
        ${aboutData.companyInfo.map(infoObject => `
            <div class='text-box'>
                <h2>${infoObject.heading}</h2>
                ${infoObject.info.map(item => 
                    `<p class='info'>
                        <span><strong>${item.title}:</strong></span>
                        <span>${item.text}</span>
                    </p>`
                ).join('')}
            </div>`).join('')}
    </div>`

const addMap = () => {
    addClass(aboutSubcontent.lastChild, 'map-container')
    const mapContainer = aboutSubcontent.querySelector('.map-container')
    const mapContainerCaption = mapContainer.querySelector('.caption')

    mapContainerCaption.innerHTML = `<i class='fa-solid fa-location-dot'></i>find us`

    const map = document.createElement('iframe')

    map.src = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3075.5572636444517!2d2.645630676499939!3d39.56958940676244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1297924550f73007%3A0x48cbc50269fbdd1e!2sPla%C3%A7a%20del%20Rosari%2C%20Centre%2C%2007001%20Palma%2C%20Illes%20Balears%2C%20Spain!5e0!3m2!1sen!2scz!4v1706110593549!5m2!1sen!2scz`
    map.allowfullscreen = true;
    map.loading = 'lazy';

    mapContainer.prepend(map)
}

const displayAdressInFull = () => {
    const infoBoxes = aboutSubcontent.querySelectorAll('.text-container .info')
    const adress = infoBoxes[2]
    addClass(adress, 'adress')
}

const createAboutSubcontent = () => {
    captionImages.splice(captionImages.length - 1, 0, textContainer)
    aboutSubcontent.innerHTML = captionImages.join('')

    displayAdressInFull()
    addMap()
}

window.addEventListener('DOMContentLoaded', createAboutSubcontent)