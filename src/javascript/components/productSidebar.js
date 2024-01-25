import productData from '../data/productData.js'
import { createBookingForm, setForm } from './bookingForm.js'
import { createPriceList, addActive, removeActive, accordions } from '../utils/utils.js'

const modal = document.querySelector('.modal')
const productSidebar = document.querySelector('.product-sidebar')

const createPriceListElement = (price) => {
    const pricelist = createPriceList(price)

    const pricelistElement = pricelist.map((day) => {
        return `<div class='list-col'>
                <span class='col-title'>${day.title}</span>
                <span>${day.price}</span>
                </div>`
    }).join('')

    return pricelistElement
}

const showProductDetail = (modalButton) => {
    const productId = parseInt(modalButton.dataset.id)
    const currentProduct = productData[productId - 1]

    addActive(modal)
    addActive(productSidebar)

    productSidebar.dataset.id = currentProduct.id

    productSidebar.innerHTML =
    `<button class='close-btn'>
        <i class='fa-solid fa-xmark'></i>
    </button>
    <div class='info-container'>
        <h4>${currentProduct.title}</h4>
        <p>${currentProduct.description}</p>
        <div class='sidebar-box'>
            <div class='box-header'>
                <span class='accordion-label'><i class='fa-solid fa-tags'></i>Price list</span>
                <button>
                    <i class='fa-solid fa-plus'></i>
                    <i class='fa-solid fa-minus'></i>
                </button>
            </div>
            <div class='content-box'>
                <div class='price-list content'>
                    ${createPriceListElement(currentProduct.price)}
                </div>
            </div>
        </div>
        <div class='sidebar-box'>
        <div class='box-header'>
            <span class='accordion-label'><i class='fa-regular fa-calendar-days'></i>Book this bike</span>
            <button>
                <i class='fa-solid fa-plus'></i>
                <i class='fa-solid fa-minus'></i>
            </button>
        </div>
        <div class='content-box'>
            ${createBookingForm(currentProduct)}
        </div>
    </div>
    </div>
    <div class='image-container'> 
        <img src='${currentProduct.image}' alt=''/>
    </div>`

    addSidebarControls()
    setForm()
}

const addSidebarControls = () => {
    const closeModalButton = productSidebar.querySelector('.close-btn')
    const sidebarBoxes = document.querySelectorAll('.sidebar-box')

    closeModalButton.addEventListener('click', () => {
        removeActive(modal)
        removeActive(productSidebar)
    });

    accordions(sidebarBoxes)
}

export { showProductDetail }