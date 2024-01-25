import productData from '../data/productData.js'
import { showProducts } from './productPreview.js'
import { clearsearchInput } from './productSearch.js'
import { addActive } from '../utils/utils.js'

const filterBtnContainer = document.querySelector('.filter-btn-container')

const createCategoryButtons = () => {
    const categoryButtons = [
        'all',
        ...new Set(productData.map((product) => product.category)) 
    ]

    filterBtnContainer.innerHTML = categoryButtons
    .map((category) => {
        return `<button type='button' data-id='${category}'>${category}</button>`
    }).join('')
    
    addCategoryFilter()
}

const makeAllButtonActive = () => {
    const filterBtns = document.querySelectorAll('.filter-btn-container button')

    filterBtns.forEach((button) => {
        if(button.dataset.id === 'all'){
            addActive(button)
        }
    })
}

const addCategoryFilter = () => {
    const filterBtns = document.querySelectorAll('.filter-btn-container button')

    let products = []

    filterBtns.forEach((button) => {
        button.addEventListener('click', (e) => {    
        filterBtns.forEach((oneButton) => {
            oneButton.classList.remove('active')
            e.target.classList.add('active')
        })
        if (button.dataset.id === 'all') {
            products = productData;
        } else {
            products = productData.filter((product) => {
            return product.category === button.dataset.id;
            })
        }
        clearsearchInput()
        showProducts(products)
        })
    })
}

const deactiveFilterBtns = () => {
    const filterBtns = document.querySelectorAll('.filter-btn-container button')
    filterBtns.forEach((button) => {
        button.classList.remove('active')
    })
}

export {
    createCategoryButtons,
    makeAllButtonActive,
    deactiveFilterBtns,
}