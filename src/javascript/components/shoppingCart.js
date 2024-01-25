import { addActive, removeActive, smoothItemLoading, depositCounter, getDateInWords } from '../utils/utils.js'
import { preventNavOverflow } from '../nav.js';

const modal = document.querySelector('.modal')
const shoppingCart = document.getElementById('shopping-cart')
const orderList = document.getElementById('order-list')
const cartFooter = document.getElementById('cart-footer')
const subtotalSpan = document.getElementById('cart-subtotal')
const subtotalDepositValue = document.getElementById('subtotal-deposit-value')
const cartCounter = document.getElementById('cart-counter')

let cartArray = []

const createCartItem = (item) => {
    const newItem = document.createElement('div')

    newItem.innerHTML = 
    `<div class='cart-item'>
            <div class='item-header'>
                <h5>${item.title}</h5>
                <button class='delete-btn' data-id='${item.id}'>
                    <i class='fa-solid fa-xmark'></i>
                </button>
            </div>
            <div class='item-content'>
                <div class='item-image-container'>
                    <img src='${item.image}' alt=''/>
                </div>
                <div class='item-data'>
                    <span><strong>Size:</strong> ${item.size}</span>
                    <span><strong>Price:</strong> ${item.price}</span>
                </div>
                <div class="period-data">
                    <span><strong>From:</strong> ${item.from}</span>
                    <span><strong>To:</strong> ${item.to}</span>
                </div>
            </div>
    </div>`
    orderList.appendChild(newItem)

    const deleteButton = newItem.querySelector('.delete-btn')
    deleteButton.addEventListener('click', () => {
        const itemId = deleteButton.dataset.id
        deleteCartItem(itemId);
    });

    addActive(cartFooter)
}

const createCartItemObject = (product) => {
    const selectedSize = size.value
    const fromInput = document.getElementById('from')
    const toInput = document.getElementById('to')
    const fromDate = new Date(fromInput.value)
    const toDate = new Date(toInput.value)
    const priceResult = document.getElementById('price-result')
    const price = priceResult.textContent

    const fromText = getDateInWords(fromDate)
    const toText = getDateInWords(toDate)

    const id = new Date().getTime().toString()

    const newCartItem = {
        id: id,
        productId: product.id,
        title: product.title,
        image: product.image,
        size: selectedSize,
        from: fromText,
        to: toText,
        price: price,
    }

    const orderList = document.getElementById('order-list')

    if (cartArray.length === 0){
        orderList.innerHTML = null
    }

    cartArray.push(newCartItem)
    localStorage.setItem('cart', JSON.stringify(cartArray))
    createCartItem(newCartItem)

    cartItemsCount()
    subtotalCounter() 
    const cartItems = document.querySelectorAll('.cart-item')    
    cartItems.forEach((item) => {smoothItemLoading(item)})
}

const loadCartItems = () => {
    const storedCart = JSON.parse(localStorage.getItem('cart'))
    if (storedCart !== null){
        cartArray = storedCart
    }
    orderList.innerHTML = null
    if (cartArray.length === 0) {
        orderList.innerHTML =  `<p class='cart-alert'>Your cart is empty.</p>
                                <a href='#booking' class='cart-link'>See available bikes</a>`
        cartItemsCount()
        removeActive(cartFooter)
        const cartLink = orderList.querySelector('.cart-link')
        cartLink.addEventListener('click', (e) => {
            preventNavOverflow(e)
            removeActive(shoppingCart)
            removeActive(modal)
        })
    } else {
        cartArray.map((item) => {
            createCartItem(item)
        })
        cartItemsCount()
        subtotalCounter()
        productCartScroll()
        const cartItems = document.querySelectorAll('.cart-item')    
        cartItems.forEach((item) => {smoothItemLoading(item)})
    }
}

const cartItemsCount = () => {
    if(cartArray.length <= 0) {
        removeActive(cartCounter)
    } else {
        addActive(cartCounter)
        cartCounter.textContent = cartArray.length 
    }
    return cartArray.length
}

const deleteCartItem = (itemId) => {
    cartArray = cartArray.filter(item => item.id !== itemId);
    localStorage.setItem('cart', JSON.stringify(cartArray));
    loadCartItems()
}

const productCartScroll = () => {
    if (orderList.scrollHeight > orderList.clientHeight - cartFooter.getBoundingClientRect().height) {
        orderList.classList.add('scrollable');
      } else if (orderList.scrollHeight < orderList.clientHeight - cartFooter.getBoundingClientRect().height){
        orderList.classList.remove('scrollable');
      }
}

const subtotalCounter = () => {
    const cartItemsPrices = cartArray.map(item => parseFloat(item.price.replace(/[^\d.-]/g, '')));
    const subtotalValue = cartItemsPrices.reduce((accumulator, currentValue) => {return accumulator + currentValue})
    subtotalSpan.innerHTML = `€${subtotalValue}`
    subtotalDepositValue.innerHTML = `€${depositCounter(subtotalValue)}`
}

export {
    createCartItemObject,
    loadCartItems,
    productCartScroll,
    cartItemsCount
}