import reviewData from './data/reviewData.js'
import { addClass, removeClass } from './utils/utils.js'

const reviewSlideshow = document.getElementById('review-slideshow')
const nextReviewButton = document.querySelector('.review-button-container .next-button')
const previousReviewButton = document.querySelector('.review-button-container .previous-button')
const sliderPosition = document.querySelector('.slider-position')

reviewSlideshow.innerHTML = reviewData.map((review) => {
    let position = 'next'

    if (review.id === 1){
        position = 'active'
    }

    return `<div class='review ${position}' data-id='${review.id}'>
                <div class='image-container'>
                    <img src='${review.image}'>
                </div>
                <div class='review-text'>
                    <i class='fa-solid fa-quote-left'></i>
                    <p>${review.text}</p>
                    <div class='review-footer'>
                        <span class='name'>${review.name}</span>
                        <span>rode ${review.bike}</span>
                    </div>
                </div>
            </div>`
}).join('')

sliderPosition.innerHTML = reviewData.map((review) => {
    return `<span class='position-dot' data-id='${review.id}'>
                <i class='fa-regular fa-circle'></i>
                <i class='fa-solid fa-circle-dot'></i>
            </span>`
}).join('')

const reviewSlider = (type) => {
    const currentReview = reviewSlideshow.querySelector('.active')
    const nextReview = currentReview.nextElementSibling
    const previousReview = currentReview.previousElementSibling

    if (type === 'next') {
        removeClass(nextReview, 'next')
        addClass(nextReview, 'active')
        removeClass(currentReview, 'active')
        addClass(currentReview, 'previous')

        if (parseInt(nextReview.dataset.id) === 2) {
            addClass(previousReviewButton, 'active')
        }

        if (parseInt(nextReview.dataset.id) === reviewData.length) {
            removeClass(nextReviewButton, 'active')
        }
    } else {
        removeClass(previousReview, 'previous')
        addClass(previousReview, 'active')
        removeClass(currentReview, 'active')
        addClass(currentReview, 'next')

        if (parseInt(previousReview.dataset.id) === 1) {
            removeClass(previousReviewButton, 'active')
            }

        if (parseInt(previousReview.dataset.id) === reviewData.length - 1) {
            addClass(nextReviewButton, 'active')
        }
    }
}

const sliderPositionIndicator = () => {
    const currentReview = reviewSlideshow.querySelector('.active')
    const positionDots = sliderPosition.querySelectorAll('.position-dot')

    positionDots.forEach ((dot) => {
        if (dot.dataset.id === currentReview.dataset.id){
            addClass(dot, 'active')
        } else {
            removeClass(dot, 'active')
        }
    })
}

window.addEventListener('DOMContentLoaded', sliderPositionIndicator)

previousReviewButton.addEventListener('click', () => {
    reviewSlider()
    sliderPositionIndicator()
})
    
nextReviewButton.addEventListener('click', () => {
    reviewSlider('next')
    sliderPositionIndicator()
})