import productData from './data/productData.js'
import { showProducts } from './components/productPreview.js'
import { createCategoryButtons, makeAllButtonActive } from './components/productFilters.js'
import { searchProduct } from './components/productSearch.js'
import { loadCartItems, productCartScroll, cartItemsCount} from './components/shoppingCart.js'
import { addActive, removeActive } from './utils/utils.js'

const searchButton = document.querySelector('.product-search button')
const searchInput = document.querySelector('.product-search input')
const productSidebar = document.querySelector('.product-sidebar')
const cartBtn = document.getElementById('cart-btn')
const shoppingCart = document.getElementById('shopping-cart')
const closeCartBtn = shoppingCart.querySelector('.close-btn')
const modal = document.querySelector('.modal')
const modalOverlay = document.querySelector('.modal .overlay')

const init = () => {
    loadCartItems()
    createCategoryButtons()
    makeAllButtonActive()
    showProducts(productData)
    cartItemsCount()
}

window.addEventListener('DOMContentLoaded', init)

window.addEventListener('resize', productCartScroll);

searchButton.addEventListener('click', searchProduct)
searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        e.preventDefault()
        searchProduct()
    }
})

cartBtn.addEventListener('click', () => {
    addActive(modal)
    addActive(shoppingCart)
    productCartScroll()
})

closeCartBtn.addEventListener('click', () => {
    removeActive(modal)
    removeActive(shoppingCart)
})

modalOverlay.addEventListener('click', () => {
    removeActive(modal)
    removeActive(productSidebar)
    removeActive(shoppingCart)
})