import { showProductDetail } from './productSidebar.js'

const productContainer = document.querySelector('.product-container')

const createProductElements = (currentProducts) => {
    productContainer.innerHTML = currentProducts.map((item) => { 
        return `<article class='product' data-id='${item.id}' data-aos='fade-up' data-aos-duration='200'>
                    <div class='image-container'> 
                        <img src='${item.image}' alt=''>/>
                        <div class='control-bar'>
                            <button class='detail-btn'>
                                details & booking
                            </button>
                        </div>
                    </div>
                    <div class='product-caption'>
                        <span class='name'>${item.title}</span>
                        <span class='price'>from €${item.price}</span>
                        </div>
                    </div>
                </article>`
    }).join('')
    addSidebarOpener()
}

const addSidebarOpener = () => {
    const productBoxes = document.querySelectorAll('.product')

    productBoxes.forEach((productBox) => {
    const detailButton = productBox.querySelector('.detail-btn')

    detailButton.addEventListener('click', () => {
        showProductDetail(productBox)
    })
    })
}

const showProducts = (currentProducts) => {
    const products = currentProducts

    if(products.length < 1) {
        productContainer.innerHTML = `<p>We are sorry, no products are matching your search</p>`
    } else {
        createProductElements(products)
    }
}

export {
    showProducts,
}