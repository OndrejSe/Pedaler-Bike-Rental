import productData from '../data/productData.js'

import { sizeGuide, rentalPriceCounter } from '../utils/utils.js'
import { createCartItemObject } from './shoppingCart.js'
import { addActive, removeActive } from '../utils/utils.js'

const createSizeChart = (productSizing) => {
    const sizeChart = productSizing.map((size) => {
        return `<option value='${size}'>${size} (${sizeGuide(size)})</option>`
    }).join('')

    return sizeChart
}

const createBookingForm = (product) => {
    const getCurrentDate = new Date();
    getCurrentDate.setDate(getCurrentDate.getDate() + 1);
    const startDate = getCurrentDate.toISOString().split('T')[0];

    return `<form id='order-form' class='content'>
                <div class='size-chart'>
                    <label>Select size</label>
                    <select name='size' 
                        id='size' 
                        form='item-form' 
                        onfocus='this.size=${product.size.length};'
                        onblur='this.size=0;'
                        onchange='this.size=1; this.blur()'
                    >
                    <i class='fa-solid fa-chevron-down'></i>
                    ${createSizeChart(product.size)}
                    </select>
                </div>
                <div class='set-period'>
                    <span>  
                        <label for='from'>From</label>
                        <input type='date' id='from' name='rental-start' value='${startDate}' min='${startDate}'/>
                    </span>
                    </span>
                        <label for='to'>To</label>
                        <input type='date' id='to' name='rental-end' value='${startDate}' min='${startDate}'/>
                    </span>
                </div>
                <span class='form-note'><strong>Note:</strong> Maximum rental period is currently 14 days.</span>
                <div id='booking-counter'>
                    <span class='caption'>Price of this booking</span>
                    <span id='price-result'>0</span>
                </div>
                <input type='submit' id='item-submit' value ='Add to cart'/>
            </form>`
}

const setToInputLimits = () => {
    const fromValue = document.getElementById('from').value
    const toInput = document.getElementById('to')
    let toValue = toInput.value

    const lowerLimit = new Date(fromValue);
    const lowerLimitValue = lowerLimit.toISOString().split('T')[0]
    lowerLimit.setDate(lowerLimit.getDate() + 13);
    const upperLimitValue = lowerLimit.toISOString().split('T')[0]

    toInput.setAttribute('min', lowerLimitValue)
    toInput.setAttribute('value', lowerLimitValue)
    toInput.setAttribute('max', upperLimitValue)

    if (fromValue > toValue){
        toValue = lowerLimit
    }
}

const getRentalPeriod = () => {
    const fromDate = document.getElementById('from').value
    const toDate = document.getElementById('to').value
    const startDate = new Date(fromDate)
    const endDate = new Date(toDate)

    const rentalPeriod = Math.ceil((endDate - startDate) / (1000 * 60 * 60 * 24));
    return rentalPeriod
}

const singleBookingPriceCounter = (product) => {
    const period = getRentalPeriod()
    const result = rentalPriceCounter(product.price, period)
    const price = result.price
    return price
}

const setForm = () => {
    const productSidebar = document.querySelector('.product-sidebar')
    const shoppingCart = document.getElementById('shopping-cart')
    const fromInput = document.getElementById('from')
    const toInput = document.getElementById('to')
    const orderForm = document.getElementById('order-form')
    const priceResult = document.getElementById('price-result')

    const currentProduct = productData[productSidebar.dataset.id - 1]

    priceResult.innerText = `€${singleBookingPriceCounter(currentProduct)}`

    setToInputLimits()

    fromInput.addEventListener('input', () => {
        setToInputLimits()
    })

    toInput.addEventListener('input', () => {
        priceResult.innerText = `€${singleBookingPriceCounter(currentProduct)}`
    })

    orderForm.addEventListener('submit', (e) => {
        e.preventDefault()
        createCartItemObject(currentProduct)
        removeActive(productSidebar)
        addActive(shoppingCart)
    })
}

export {
    createBookingForm,
    setToInputLimits,
    setForm
}